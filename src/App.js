import React from "react";
import { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { RiDoubleQuotesL } from "react-icons/ri";
import people from "./data";

function App() {
  const [ludia, setLudia] = useState(people);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > ludia.length - 1) {
      setIndex(0);
      return;
    }
    if (index < 0) {
      setIndex(ludia.length - 1);
      return;
    }
  }, [index, ludia]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <div className="titul">
        <h1 className="text-center mt-5">Project-Slider</h1>
        <div className="underline"></div>
      </div>
      <section className=".container text-center">
        {ludia.map((clovek, clovekIndex) => {
          const { image, name, title, quote } = clovek;
          let pozicia = "nextSlide";
          if (clovekIndex === index) {
            pozicia = "aktivSlide";
          }
          if (
            clovekIndex === index - 1 ||
            (index === 0) & (clovekIndex === ludia.length - 1)
          ) {
            pozicia = "lastSlide";
          }
          return (
            <article key={clovek.id} className={pozicia}>
              <img src={image} alt={name} />

              <h4>{name}</h4>
              <h6>{title}</h6>
              <p>{quote}</p>
              <span>
                <RiDoubleQuotesL className="kvacka" />
              </span>

              <FcPrevious
                className="prev"
                onClick={() => setIndex(index - 1)}
              />

              <FcNext className="next" onClick={() => setIndex(index + 1)} />
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
