const TodoItem = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center ">
        <input className="bg-[#246EB9] h-12 w-[50%] rounded-lg text-white" type="text" />
        <div className="flex flex-row">
          <button className="bg-[#374151] text-amber-50 w-25 rounded-lg cursor-pointer">Edit</button>
          <button className="bg-[#374151] text-amber-50 w-25 rounded-lg cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
