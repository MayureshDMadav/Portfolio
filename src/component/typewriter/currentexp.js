import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Currentexp() {
  const [text] = useTypewriter({
    words: [
      "Working as a Software Engineer for over 6 years, I have sharpened my expertise as a technical consultant and advanced my development skills with modern frameworks and technologies such as React (with TypeScript), Svelte, Next.js, PHP, Python, and .NET. I have contributed to complex enterprise applications, checkout platforms, and automation tools to improve user and merchant experiences.",
      "I efficiently analyze and resolve integration and technical issues faced by merchants across diverse platforms, leveraging strong debugging skills, real-time troubleshooting, and deep knowledge of REST APIs, browser-based debugging, and automation testing to enable fast and reliable integrations.",
      "Adept at understanding business requirements, I design and implement automation tools and scalable documentation portals using technologies like Docusaurus and Swagger UI, streamlining onboarding, enhancing team efficiency, and supporting end-to-end product integrations.",
    ],
    loop: false,
    deleteSpeed: 0,
    typeSpeed: 30,
  });
  return (
    <>
      {text}
      <Cursor />
    </>
  );
}

export default Currentexp;
