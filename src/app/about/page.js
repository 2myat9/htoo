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
                "I'm Htoomyat Naing, but you can call me Htoo. I graduate from Harvey Mudd College in 2024 with a Bachelor of Science Degree in Computer Science. I'm passionate about developing user-friendly, high-performant applications for the web. When I'm not coding, I like to travel, practice photography, and learn new languages. Recently I've been getting into mixology. Follow me on social media if you want to get in touch!",
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
                "I enjoy reiterating the process of building software, solving problems, and optimizing solutions. I am proficient and comfortable in developing applications for the web. However, as a Computer Scientist first and Software Engineer second, I am always curious and learning more everyday about new and emerging technologies such as Augmented Reality, Machine Learning, and the Blockchain.",
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
