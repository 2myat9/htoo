"use client";
import { TypeAnimation } from "react-type-animation";
import { SpaceGrotesk } from "../fonts/SpaceGrotesk";
import { ChakraPetch } from "../fonts/ChakraPetch";
import BackButton from "../components/BackButton";

const About = () => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center bg-black`}
    >
      <div className="max-w-screen-sm flex flex-col items-stretch gap-12">
        <BackButton />
        <div className="flex flex-col items-start gap-2">
          <h1
            className={`font-title ${ChakraPetch.variable} text-4xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-200 via-indigo-100 to-sky-300`}
          >
            <TypeAnimation
              sequence={["About Me"]}
              speed={30}
              style={{}}
              repeat={0}
            />
          </h1>
          <p
            className={`font-sans ${SpaceGrotesk.variable} text-xl bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-200 via-indigo-100 to-sky-300`}
          >
            <TypeAnimation
              sequence={[
                "Ut mollit adipisicing esse enim eiusmod. Velit ea sit qui fugiat id nulla eu. Fugiat magna non elit irure reprehenderit reprehenderit est id nulla veniam laboris anim. Ut mollit adipisicing esse enim eiusmod. Velit ea sit qui fugiat id nulla eu. Fugiat magna non elit irure reprehenderit reprehenderit est id nulla veniam laboris anim.",
              ]}
              speed={90}
              style={{}}
              repeat={0}
            />
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <h1
            className={`font-title ${ChakraPetch.variable} text-4xl text-right font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-200 via-indigo-100 to-sky-300`}
          >
            <TypeAnimation
              sequence={["Career Objective"]}
              speed={30}
              style={{}}
              repeat={0}
            />
          </h1>
          <p
            className={`font-sans ${SpaceGrotesk.variable} text-right text-xl bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-200 via-indigo-100 to-sky-300`}
          >
            <TypeAnimation
              sequence={[
                "Ut mollit adipisicing esse enim eiusmod. Velit ea sit qui fugiat id nulla eu. Fugiat magna non elit irure reprehenderit reprehenderit est id nulla veniam laboris anim.",
              ]}
              speed={90}
              style={{}}
              repeat={0}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
