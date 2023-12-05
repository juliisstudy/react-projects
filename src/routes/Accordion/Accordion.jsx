import { useState } from "react";
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h2 className="center">Solar System</h2><br/>
      <div className ="panel col-md-12">
      <h3>Mercury</h3><br/>
      <Panel
        title=""
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>Mercury is the closest planet to the Sun. The smallest planet in the
        Solar System (0.055 M🜨), Mercury has no natural satellites.</p>
      </Panel>
      </div>
      <br/>
      <div className ="panel col-md-12">

      <h3>Venus</h3>
      <Panel
        title=""
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth. </p>
      </Panel>
      </div>
    </div>
  );
  // eslint-disable-next-line react/prop-types
  function Panel({ title, children, isActive, onShow }) {
    return (
      <section className="panel-content">
        <h4>{title}</h4>
        {isActive ? <p>{children}</p> : <button className="panel-button" onClick={onShow}>About</button>}
      </section>
    );
  }
}
