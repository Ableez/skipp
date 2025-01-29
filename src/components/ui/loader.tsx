import Image from "next/image";
import React from "react";

const LoaderUI = () => {
  return (
    <div className="flex place-items-center justify-center align-middle">
      <Image
        className="animate-bounce-realistic "
        src={"/logo.svg"}
        width={27}
        height={27}
        alt={"skipp logo"}
      />
    </div>
  );
};

export default LoaderUI;
