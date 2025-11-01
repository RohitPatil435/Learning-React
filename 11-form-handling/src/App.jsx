import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submited");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter ur name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
