import React, { useState } from "react";
import TextInput from "./TextInput";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// // Specify all properties: name, family, style
// icon({ name: "user", family: "classic", style: "solid" });
// icon({ name: "user", family: "classic", style: "regular" });
// icon({ name: "twitter", family: "classic", style: "brands" });

// // 'classic' is the default family, you can leave that off
// icon({ name: "user", style: "solid" });
// icon({ name: "user", style: "regular" });
// icon({ name: "twitter", style: "brands" });

// // 'solid' is the default style, you can leave that off
// icon({ name: "user" });

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

interface inputType {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export default function Main({}: Props) {
  const [input, setInput] = useState<inputType>({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  let register: inputType = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [errorFName, setErrorFName] = useState("");
  const [errorLName, setErrorLName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [errorFNameColor, setErrorFNameColor] = useState(false);
  const [errorLNameColor, setErrorLNameColor] = useState(false);
  const [errorEmailColor, setErrorEmailColor] = useState(false);
  const [errorPasswordColor, setErrorPasswordColor] = useState(false);

  function onChangeHandler(event: any) {
    const { name, value } = event.target;
    // console.log(input);
    if (name === "fname") {
      setErrorFName("");
      setErrorFNameColor(false);
    } else if (name === "lname") {
      setErrorLName("");
      setErrorLNameColor(false);
    } else if (name === "email") {
      setErrorEmail("");
      setErrorEmailColor(false);
    } else if (name === "password") {
      setErrorPassword("");
      setErrorPasswordColor(false);
    }

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitHandler(event: any) {
    event.preventDefault();
    const name: string[] = ["fname", "lname", "email", "password"];

    const { fname, lname, email, password } = input;

    if (fname !== "") {
      setErrorFName("");
      register.fname = fname;
    } else {
      setErrorFName("First Name cannot be empty");
      setErrorFNameColor(true);
    }
    if (lname !== "") {
      setErrorLName("");
      register.lname = lname;
    } else {
      setErrorLName("Last Name cannot be empty");
      setErrorLNameColor(true);
    }
    if (email.includes("@")) {
      setErrorEmail("");
      register.email = email;
    } else {
      setErrorEmail("Looks like this is not an email");
      setErrorEmailColor(true);
    }
    if (password !== "") {
      setErrorPassword("");
      register.password = password;
    } else {
      setErrorPassword("Password cannot be empty");
      setErrorPasswordColor(true);
    }

    console.log(register);
  }
  return (
    <div className="flex flex-col justify-center flex-wrap items-center mb-10 lg:flex-row">
      <div className="max-w-[26.5rem] text-center px-12  text-white mb-16 lg:shrink-0 lg:max-w-[34rem] lg:text-left lg:px-0 lg:pr-12">
        <h1 className="text-3xl font-bold mb-8 lg:text-5xl ">
          Learn to code by watching others
        </h1>
        <p className="px-1">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="max-w-[20.5rem] lg:max-w-[34.75rem]">
        <div className="bg-[#5E54A4] h-[3.75rem] mb-5 flex justify-center items-center rounded-lg shadow-2lg">
          <p className=" text-white">
            Try it free 7 days then $20/mo. thereafter
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-2lg lg:p-10">
            <div className="mb-5 relative">
              <TextInput
                type="text"
                id="fname"
                name="fname"
                placeholder={!errorFNameColor ? "First Name" : ""}
                input={input.fname}
                onChangeHandler={onChangeHandler}
                isError={errorFNameColor}
              />
              <p className="text-[#FF7979] text-right text-sm font-medium italic">
                {errorFName}
              </p>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                style={{ color: "#ff7979" }}
                className={`absolute right-6 top-4 ${
                  !errorFNameColor ? "invisible" : ""
                }`}
              />
            </div>
            <div className="mb-5 relative">
              <TextInput
                type="text"
                id="lname"
                name="lname"
                placeholder={!errorLNameColor ? "Last Name" : ""}
                input={input.lname}
                onChangeHandler={onChangeHandler}
                isError={errorLNameColor}
              />
              <p className="text-[#FF7979] text-right text-sm font-medium italic">
                {errorLName}
              </p>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                style={{ color: "#ff7979" }}
                className={`absolute right-6 top-4 ${
                  !errorLNameColor ? "invisible" : ""
                }`}
              />
            </div>
            <div className="mb-5 relative">
              <TextInput
                type="text"
                id="email"
                name="email"
                placeholder={
                  !errorEmailColor ? "Email Address" : "email@example/com"
                }
                input={input.email}
                onChangeHandler={onChangeHandler}
                isError={errorEmailColor}
              />
              <p className="text-[#FF7979] text-right text-sm font-medium italic">
                {errorEmail}
              </p>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                style={{ color: "#ff7979" }}
                className={`absolute right-6 top-4 ${
                  !errorEmailColor ? "invisible" : ""
                }`}
              />
            </div>
            <div className="mb-5 relative">
              <TextInput
                type="password"
                id="password"
                name="password"
                placeholder={!errorPasswordColor ? "Password" : ""}
                input={input.password}
                onChangeHandler={onChangeHandler}
                isError={errorPasswordColor}
              />
              <p className="text-[#FF7979] text-right text-sm font-medium italic">
                {errorPassword}
              </p>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                style={{ color: "#ff7979" }}
                className={`absolute right-6 top-4 ${
                  !errorPasswordColor ? "invisible" : ""
                }`}
              />
            </div>
            <button className="bg-[#38CC8B] h-14 mb-3 text-white font-semibold uppercase tracking-wider rounded-lg shadow-2inner hover:bg-[#77E2B3]">
              Claim your free trial
            </button>
            <p className="text-xs text-center text-[#A6A1CF] tracking-wide ">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-[#FF7979] font-bold cursor-pointer">
                Terms and Services
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
