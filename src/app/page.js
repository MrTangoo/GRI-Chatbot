import Nav from "./components/Nav";
import Content from "./components/Content";
import Bot from "./components/Bot";
import Description from "./components/Description";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Nav />
      <Content />
      <Description />
      <div className="pt-20 mt-auto">
        <Bot />
      </div>
    </div>
  );
}
