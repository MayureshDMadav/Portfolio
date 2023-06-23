import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Headertype() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Integration Engineer"],
    loop: {},
  });
  return (
    <>
      {text}
      <Cursor />
    </>
  );
}

export default Headertype;
