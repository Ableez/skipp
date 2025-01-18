import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full">
        <div className="h-32 p-3 w-full bg-gradient-to-b from-purple-950/70 to-transparent">
        <Image src={"/logo.svg"} width={60} height={60} alt={"skipp logo"} />
          <h4 className={"text-4xl font-bold"}>Skipp</h4>
        </div>
      </div>
    </div>
  );
}
