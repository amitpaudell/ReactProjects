import { useEffect, useState } from "react";
import Following from "./Following";
const GitHub = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getGitHubData() {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setData(data);
    }
    getGitHubData();
  }, [user]);
  return (
    <div className="bg-gray-500 text-white text-center text-3xl p-4 ">
      <label htmlFor="">Enter your github username</label>
      <button>Submit</button>
      <input type="text" name="" id="" value={user} onChange={(e) => setUser(e.target.value)} />

      <p>Username: {data.login}</p>
      <img src={data.avatar_url} className="w-44 h-44 mx-auto my-6" alt="" />
      <Following user={user}></Following>
    </div>
  );
};

export default GitHub;
