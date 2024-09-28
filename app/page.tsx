import Flow from "@/components/flow";
import Hero from "@/components/hero";
import Project from "./project";
import Resume from "./resume";
import Work from "./work";

export default function Projects() {
  return (
    <div>
      <Hero
        title="Hello, I'm Shuya."
        description="student and developer."
        body="I'm sutdent of National Institute of Technology, Ichinoseki College."
      ></Hero>
      <hr />
      <Work></Work>
      <hr />
      <Project></Project>
      <hr />
      <Resume></Resume>
      <hr />
      <Flow></Flow>
    </div>
  );
}
