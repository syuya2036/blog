import "katex/dist/katex.min.css";
import Image from "next/image";
import { BlockMath } from "react-katex";
import * as runtime from "react/jsx-runtime";

const useMDXComponents = (code: string) => {
  console.log(code);
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  // p: (props: any) => {
  //   const { children } = props;

  //   if (typeof children === "string" && children.includes("$$")) {
  //     const block = children.replace(/\$\$/g, "").trim();
  //     console.log(block);
  //     return <BlockMath math={block} />;
  //   }

  //   return <p {...props} />;
  // },
};

interface MdxProps {
  code: string;
}

export function MDXComponent({ code }: MdxProps) {
  const Component = useMDXComponents(code);
  return (
    <div className="block-math-display">
      <Component components={components} />
    </div>
  );
}
