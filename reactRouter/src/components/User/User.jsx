import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="text-3xl text-center font-bold bg-blue-500 p-8">
      <h1 className="text-zinc-600">User:{id}</h1>
    </div>
  );
};

export default User;
