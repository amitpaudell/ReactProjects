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
      <div className="">
        Following:
        <ul className="list-inside list-disc">
          {following.map((fol) => {
            return (
              <li key={fol.login} className="">
                {fol.login}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Following;
