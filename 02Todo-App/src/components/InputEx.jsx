import { useState } from "react";

const InputEx = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter a text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>{text}</h2>
    </div>
  );
};

export default InputEx;
