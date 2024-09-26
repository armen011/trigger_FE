import Typography from "@/components/Typography";
import Section from "@/components/Section";
import Image from "next/image";
import { Metadata } from "next";
import Form from "./_components/Form";
import Container from "@/components/Container";

const firstSectionEllipseWidthClassName =
  "h-[311px] md:h-[582px] xl:h-[674px] w-[357px] md:w-[669px] xl:w-[774px]";
const firstSectionEllipsePositionClassName =
  "-left-[136px] -md:left-[229px] -xl:left-[260px] -top-[144px] -md:top-[166px] -xl:top-[309px] -2xl:top-[366px]";

const secondSectionEllipseWidthClassName =
  "h-[288px] md:h-[450px]  w-[380px] md:w-[592px] ";
const secondSectionEllipsePositionClassName =
  "-right-[288px] -md:right-[394px] -xl:right-[192px] -2xl:right-[272px] -top-[320px]";

const ContactUs = () => {
  return (
    <>
      <Section
        ellipse="green"
        className={`${firstSectionEllipseWidthClassName} absolute ${firstSectionEllipsePositionClassName}`}
        wrapperCN="w-full flex"
      >
        <Container className="flex flex-col justify-center items-center lg:flex-row gap-10 md:gap-12 xl:gap-10 2xl:gap-16 p-6 md:p-12 xl:p-16 2xl:p-20">
          <div className="flex flex-col items-end flex-grow max-w-[644px]">
            <Typography variant="h1" className="mr-auto whitespace-nowrap">
              We’d Love To
            </Typography>
            <Typography variant="h1" className="mr-auto whitespace-nowrap">
              Hear From You
            </Typography>
            <Image
              width={525}
              height={482}
              src="/images/contact_us.png"
              alt="Contact us image"
              className="h-[301px] md:h-[387px] 2xl:h-[482px] w-[328px] md:w-[421px] 2xl:w-[525px]"
            />
          </div>
          <Form />
        </Container>
      </Section>
      <Section
        ellipse="yellow"
        className={`${secondSectionEllipseWidthClassName} absolute ${secondSectionEllipsePositionClassName} rotate-[30deg]`}
        wrapperCN="w-full h-0"
      />
    </>
  );
};

export default ContactUs;

export const metadata: Metadata = {
  title: "Trigger Contact Us",
  description:
    "Touchpoints. Reflrect. Results. Research based marketing agency",
};
