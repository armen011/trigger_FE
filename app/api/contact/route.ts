import { NextResponse } from "next/server";

import MailJet from "node-mailjet";

const mailJetApiKeyPublic = process.env.MAILJET_API_PUBLIC_KEY;
const mailJetApiKeySecret = process.env.MAILJET_API_PRIVATE_KEY;

type BodyType = {
  email: string;
  phoneNumber: string;
  companyName: string;
  aboutProject: string;
};

export const POST = async (request: Request) => {
  if (!mailJetApiKeyPublic || !mailJetApiKeySecret) {
    return NextResponse.json({ error: "Config issue" }, { status: 405 });
  }

  const body = (await request.json()) as BodyType;

  const mailjet = MailJet.apiConnect(mailJetApiKeyPublic, mailJetApiKeySecret);
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
  return NextResponse.json({ url: "", data: "" }, { status: 200 });
};
