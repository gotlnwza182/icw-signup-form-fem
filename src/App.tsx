import Main from "./components/Main";

type Props = {};

export default function App({}: Props) {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-intro-pattern bg-[#FF7979]">
      <div className="container my-10">
        <Main />
        <footer className="text-center">
          <p className="text-white">
            Challenge by &nbsp;
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="text-[#5E54A4] underline"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/gotlnwza182/icw-signup-form-fem"
              target="_blank"
              className="text-[#5E54A4] underline"
            >
              Denpong Khetpong
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
