import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowded, setNumberAllowded] = useState(false);
  const [characterAllowded, setCharacterAllowded] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowded) {
      str += "0123456789";
    }
    if (characterAllowded) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numberAllowded, characterAllowded, setPassword]);

  const passRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowded, characterAllowded, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className="outline-none w-full py-1 px-3" ref={passRef} placeholder="Password" value={password} readOnly />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 " onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} className="cursor-pointer" value={length} onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowded}
            onChange={() => {
              setNumberAllowded((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={characterAllowded}
            onChange={() => {
              setCharacterAllowded((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
