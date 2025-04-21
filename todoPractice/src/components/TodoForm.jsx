const TodoForm = () => {
  return (
    <div className="flex justify-center mt-9 gap-4 mb-20">
      <input className="bg-amber-100 h-12 w-[50%] rounded-lg" type="text" />
      <button className="bg-[#374151] text-amber-50 w-25 rounded-lg cursor-pointer">Add</button>
    </div>
  );
};

export default TodoForm;
