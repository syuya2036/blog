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
      <hr className="" />
      <Work></Work>
      <hr className="mt-8" />
      <Project></Project>
      <hr className="" />
      <Resume></Resume>
      <hr className="mt-8" />
      <Flow></Flow>
    </div>
  );
}
