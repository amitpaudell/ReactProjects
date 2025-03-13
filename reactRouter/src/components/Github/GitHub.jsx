import { useEffect, useState } from "react";
import Following from "./Following";
const GitHub = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getGitHubData() {
      const res = await fetch(`https://api.github.com/users/amitpaudell`);
      const data = await res.json();
      setData(data);
    }
    getGitHubData();
  }, []);
  return (
    <div className="bg-gray-500 text-white text-center text-3xl p-4 ">
      <p>Username: {data.login}</p>
      <img src={data.avatar_url} className="w-44 h-44 mx-auto my-6" alt="" />
      <Following></Following>
    </div>
  );
};

export default GitHub;
