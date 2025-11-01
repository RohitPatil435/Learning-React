import React from "react";

const App = () => {
  function inputChange() {
    console.log("input changed");
  }

  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log("seedddhhaaaa");
    } else {
      console.log("ulttaaaaa");
    }
  };

  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY);
      }}
    >
      <div className="page1">
        <div
          onMouseMove={(elem) => {
            console.log(elem.clientX, elem.clientY);
          }}
          className="box"
        ></div>
      </div>
      <div className="page2">
        <div>
          <input
            onChange={function (elem) {
              inputChange(elem.target.value);
            }}
            type="text"
            placeholder="Enter name"
          />
        </div>
      </div>

      <div className="page3"></div>
    </div>
  );
};

export default App;
