import { useEffect, useState } from "react";

const Following = () => {
  const [following, setFollowing] = useState([]);
  useEffect(() => {
    async function getFollowing() {
      const res = await fetch("https://api.github.com/users/amitpaudell/following");
      const data = await res.json();
      setFollowing(data);
    }
    getFollowing();
  }, []);
  return (
    <>
      {following.map((fol) => {
        return <p className="bg-gray-500 text-white text-center text-3xl p-4 ">Following :{fol.login}</p>;
      })}
    </>
  );
};

export default Following;
