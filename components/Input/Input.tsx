import { FC } from "react";
import { InputProps } from "./types";
import { FieldValues, Path } from "react-hook-form";
import Typography from "../Typography";

const Input = <T extends FieldValues>({
  name,
  error,
  placeholder,
  register,
  type,
  label,
  className,
}: InputProps<T>) => {
  return (
    <div
      className={`${className} border-b relative ${
        error ? "border-primary-red" : "border-[#D9D9D9]"
      } pb-3`}
    >
      <label htmlFor={name as string}>
        <Typography variant="p" className="mb-1">
          {label}
        </Typography>
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="bg-[transparent] outline-0 text-white"
        {...register(name)}
      />
      <span className="top-full left-0 absolute text-[12px] text-primary-red pt-1">
        {error?.message}
      </span>
    </div>
  );
};

export default Input;
