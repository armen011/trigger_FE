import {
  mailJetApiKeyPublic,
  mailJetApiKeySecret,
  strapiApiUrl,
} from "@/config/env";
import { NextResponse } from "next/server";

import MailJet from "node-mailjet";

type BodyType = {
  email: string;
  phoneNumber: string;
  companyName: string;
  aboutProject: string;
};

export const POST = async (request: Request) => {
  if (!mailJetApiKeyPublic || !mailJetApiKeySecret) {
    return NextResponse.json({ error: "Config issue" }, { status: 503 });
  }

  try {
    const body = (await request.json()) as BodyType;

    try {
      const data = await fetch(`${strapiApiUrl}/leads`, {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: body.email,
            name: body.companyName,
            isWatched: false,
            phone_number: body.phoneNumber,
            About: body.aboutProject,
          },
        }),
        headers: { "Content-Type": "application/json" },
      });
      data.json();
      if (data.status !== 200) {
        return NextResponse.json({ error: "Strapi issue" }, { status: 400 });
      }
    } catch (e) {
      return NextResponse.json({ error: "Strapi issue" }, { status: 400 });
    }
    const mailjet = MailJet.apiConnect(
      mailJetApiKeyPublic,
      mailJetApiKeySecret
    );
    mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "armen21mkrtchyan0616@gmail.com",
            Name: "Application",
          },
          To: [
            {
              Email: "armen21mkrtchyan0616@gmail.com",
              Name: "Trigger",
            },
          ],
          Subject: `${body?.companyName} wants to contact you`,
          TextPart: "A new request from a potential client",
          HTMLPart: `<h3>Company Name:</h3><p>${body?.companyName}</p><h3>Email:</h3><p>${body?.email}</p><h3>Phone:</h3><p>${body?.phoneNumber}</p><h3>About:</h3><p>${body?.aboutProject}</p>`,
        },
      ],
    });
    return NextResponse.json({ error: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Config issue" }, { status: 503 });
  }
};
