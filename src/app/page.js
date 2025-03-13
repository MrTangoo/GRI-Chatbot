import Image from "next/image";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Bot from "./components/Bot";
import Description from "./components/Description";

export default function Home() {
  return (
    <div>
      <Nav />
      <Content />
      <Description />
      <Bot />
    </div>
  );
}
