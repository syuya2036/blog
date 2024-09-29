"use client";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
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
