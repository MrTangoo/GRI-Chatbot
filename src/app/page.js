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
      <div className="pt-20">
        <Bot />
      </div>
    </div>
  );
}
