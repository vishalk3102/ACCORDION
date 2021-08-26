import React, { useState } from "react";
const MyAccordion = ({ topic, description }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="accordion-box">
        <p className="sign"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "➖" : "➕"}
        </p>
        <h3 className="topic">{topic}</h3>
      </div>
      {show && <p className="description">{description}</p>}
    </>
  );
};
export default MyAccordion;
