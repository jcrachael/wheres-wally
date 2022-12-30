// Styles
import "./App.css";
import handleSubmit from "./handles/handleSubmit";
import { useRef } from "react";
import { SampleForm } from "./components/SampleForm";

function App() {
  const dataRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };

  return (
    <div className="App">
      <header>
        <h1>Where's Wally?</h1>
      </header>
      <SampleForm submitHandler={submitHandler} dataRef={dataRef} />
    </div>
  );
}

export default App;
