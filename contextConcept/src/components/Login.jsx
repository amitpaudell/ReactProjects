import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleClick(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <>
      <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Login;
