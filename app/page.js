import Head from "./compnent/Head";
import Info from "./compnent/Info";
import Nav from "./compnent/Nav";
import Projects from "./compnent/Projects";

export default function Home() {
  return (
    <div className=" relative">
      <Nav />
      <Head />
      <Info />
      <Projects />
    </div>
  );
}
