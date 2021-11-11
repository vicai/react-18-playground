import "./styles.css";
import { useState, startTransition, useDeferredValue } from "react";
import MySlowList from "./MySlowList";

export default function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text, { timeoutMs: 2000 });

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={handleChange} />
      <MySlowList text={deferredText} />
    </div>
  );
}
