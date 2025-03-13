import { useEffect, useState } from "react";
import Following from "./Following";
const GitHub = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     async function getGitHubData() {
  //       const res = await fetch(`https://api.github.com/users/amitpaudell`);
  //       const data = await res.json();
  //       setData(data);
  //       console.log(data);
  //     }
  //     getGitHubData();
  //   }, []);
  return (
    <div className="w-full">
      <Following></Following>
    </div>
  );
};

export default GitHub;
