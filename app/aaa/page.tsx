
// import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
// import "./App.css";

function App() {
  const defaultblockFomula = `\\begin{pmatrix}
   a & b \\\\
   c & d
\\end{pmatrix}`;

  return (
    <>
        <span>ブロック数式 表示欄</span>
          <span>
            ブロック数式のレンダリング結果は
            <BlockMath math={defaultblockFomula} />
            です。
          </span>
    </>
  );
}

export default App;
