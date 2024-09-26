"use client";
import { useForm } from "react-hook-form";
import { FormData } from "./types";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "./schema";
import Typography from "@/components/Typography";
import SubmitButton from "@/components/SubmitButton";

const submitMessage = async (data: FormData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      isValid,
      isDirty,
      isSubmitted,
    },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      aboutProject: "",
      companyName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: zodResolver(contactUsSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const Aloo = await submitMessage(data);
        reset();
      })}
      className="flex-grow max-w-[628px] w-full"
    >
      <Typography variant="h2" className="font-semibold mb-4 md:mb-6 xl:mb-8">
        Contact Us
      </Typography>
      <div className=" flex flex-col gap-7 2xl:gap-8">
        <div className="flex flex-col items-center gap-7 2xl:gap-8 md:flex-row">
          <Input
            type="text"
            label="Email *"
            placeholder="Enter your email"
            name="email"
            register={register}
            error={errors.email}
            className="w-full"
          />
          <Input
            type="text"
            label="Phone Number *"
            placeholder="Enter your phone number"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            className="w-full"
          />
        </div>
        <Input
          type="text"
          label="Company Name *"
          placeholder="Enter your company name"
          name="companyName"
          register={register}
          error={errors.companyName}
        />
        <Input
          type="text"
          label="About your project"
          placeholder="Tell us about your project"
          name="aboutProject"
          register={register}
          error={errors.aboutProject}
        />
      </div>
      <SubmitButton
        isSubmitting={isSubmitting}
        isSubmittedSuccessfully={isSubmitSuccessful}
        isValid={isValid}
        isDirty={isDirty}
        isSubmitted={isSubmitted}
      />
    </form>
  );
};

export default Form;
