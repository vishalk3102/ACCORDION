import React, { useState } from "react";
import { Roadmap } from "./api";
import "./accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(Roadmap);
  return (
    <>
      <section className="main-div">
        <h1 className="heading">web development <br/>Roadmap</h1>
        {data.map((curElement) => {
            const {id}=curElement;
          return <MyAccordion key={curElement} {...curElement}/>;
        })}
      </section>
    </>
  );
};
export default Accordion;
