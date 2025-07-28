import Approach from "./compnent/Approach";
import Footer from "./compnent/Footer";
import Head from "./compnent/Head";
import Info from "./compnent/Info";
import Nav from "./compnent/Nav";
import Projects from "./compnent/Projects";
import Word from "./compnent/Word";
import Work from "./compnent/Work";

export default function Home() {
  return (
    <div className=" relative">
      <Nav />
      <Head />
      <Info />
      <Projects />
      <Word />
      <Work />
      <Approach />
      <Footer />
    </div>
  );
}
