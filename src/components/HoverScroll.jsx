"use client";

import "../app/hoverScrollcss.css";

export default function HoverScroll({ textValue }) {
  const valArray = textValue.split("");

  const charDivs = valArray.map((char, index) => (
    <div
      className="char"
      style={{ "--delay": `${index * 0.03}s` }} // Set delay dynamically
      key={index}
    >
      {char}
    </div>
  ));

  return (
        <>
            <div style={{position: "absolute"}}>
                <div style={{backgroundColor: "transparent", width: "max-content"}} className="hoverAnimClass">
                    <div style={{backgroundColor: 'transparent', height: "0px", marginBottom: 16.5}}>{charDivs}</div>
                    <div>{charDivs}</div>
                </div>
            </div>
        </>   
    );
}