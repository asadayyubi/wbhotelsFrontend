import React, { useState } from "react";

const InputPrimary = () => {
  const [focus, setfocus] = useState(false);
  return (
    <div className={`input-primary ${focus ? "focused" : ""}`}>
      <input type="text" placeholder="Your e-mail" onFocus={() => setfocus(true)} onBlur={() => setfocus(false)} />
    </div>
  );
};

export default InputPrimary;
