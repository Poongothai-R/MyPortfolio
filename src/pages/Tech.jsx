import React from "react";
import techData from "../data/techdata.json";
import TechItem from "../components/TechItem";
import ModalTech from "../components/ModalTech";


export default function Tech({ setShowModal }) {
  const TechList = techData.map((data) => (
    <TechItem key={data.id}
              data={data}
              onClick={() => setShowModal(<ModalTech data={data} />)}/>
  ));

  return (
    <div className="container_main" id="tech">
      <div className="container_sub">
        <div className="page_left">
          <h2 className="title">Technologies I Use</h2>
          <p>
            Some the key technologies that I started learning and still going strong.
            I call them my Tech friends!
          </p>
        </div>
        <div className="page_right">
          <div className="tech_list">{TechList}</div>
        </div>
      </div>
    </div>
  );
}
