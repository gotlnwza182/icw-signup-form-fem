import React from "react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  input: string;
  onChangeHandler: any;
  isError?: boolean;
};

export default function TextInput({
  id,
  name,
  placeholder,
  type,
  input,
  onChangeHandler,
  isError,
}: Props) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={input}
        onChange={onChangeHandler}
        className={`w-full h-14 rounded-lg p-6 text-[#3d3b48] border border-semisolid border-[#dedede] font-semibold placeholder:font-bold focus:outline-none focus:border-[#5e54a4] ${
          isError
            ? "border-[#FF7979] border-2 placeholder:text-[#FF7979] placeholder:font-semibold"
            : ""
        }`}
      />
    </>
  );
}
