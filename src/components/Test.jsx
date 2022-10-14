import { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");

  return (
    <div className="text-white text-center text-3xl">
      <h1>Test</h1>
      <h2>value: {value}</h2>
      <input
        type="text"
        className="text-black"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => localStorage.setItem("test", value)}>save</button>
      <br />
      <button onClick={() => localStorage.clear()}>clear</button>
    </div>
  );
};

export default Test;
