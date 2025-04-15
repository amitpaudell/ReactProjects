import { useParams } from "react-router-dom";

const ParamComp = () => {
  const { id } = useParams();
  return (
    <>
      <h3>Your user id is {id}</h3>
    </>
  );
};

export default ParamComp;
