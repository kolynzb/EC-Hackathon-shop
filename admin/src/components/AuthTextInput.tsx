import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface AuthTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  errors?: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
  };
}
const AuthTextInput = ({ label, errors, ...rest }: AuthTextInputProps) => {
  return (
    <div className="flex items-start justify-center flex-col ">
      <label className="text-xl capitalize mb-1 font-light">{label}</label>
      <input {...rest} className="border h-10 w-80 rounded-md" />
      {/* errors will return when field validation fails  */}
      {errors?.password && (
        <span className="text-red-600 animate-pulse ">
          This field is required
        </span>
      )}
    </div>
  );
};

export default AuthTextInput;
