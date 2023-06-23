"use client";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import { TypeAnimation } from "react-type-animation";
import { SpaceGrotesk } from "../fonts/SpaceGrotesk";
import { ChakraPetch } from "../fonts/ChakraPetch";

const Experience = () => {
  return (
    <div className={`flex items-center justify-center bg-black p-6`}>
      <div className="max-w-screen-lg flex flex-col items-stretch gap-12 mb-6">
        <BackButton />
        <div
          className={`font-title ${ChakraPetch.variable} text-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-violet-100 via-green-300 to-purple-200`}
        >
          <TypeAnimation
            sequence={["Here are some things I have enjoyed working on."]}
            speed={50}
            repeat={0}
            cursor={false}
          />
        </div>
        <div
          className={`flex flex-wrap items-center justify-center gap-4 font-sans ${SpaceGrotesk.variable}`}
        >
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
          <Card
            link="#"
            title="Awesome Job Experience"
            body="Ea et veniam aliqua excepteur ex excepteur dolor eiusmod. Ullamco ea sint aliquip elit amet tempor eiusmod nulla est fugiat. Exercitation officia qui enim aute mollit eu mollit eiusmod proident ut aliqua consectetur."
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
