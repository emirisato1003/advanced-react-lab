import React, { useRef } from 'react';

export default function App() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);
  const inputRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) {
      return;
    }
    setList(prevList => [...prevList, text]);
    setText("");
    // Focus back to the input element
    inputRef.current.focus();
  }

  return (
    <>
      <h2>React Project Ideas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
          ref={inputRef}
        />
        <button>Submit</button>
      </form>

      <ol>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    </>
  );
}
