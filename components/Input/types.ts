import {
  FieldValues,
  UseFormRegister,
  FieldError,
  Path,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  type: Pick<HTMLInputElement, "type">["type"];
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  label?: string;
  className?: string;
};
