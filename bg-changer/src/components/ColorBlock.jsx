export default function ColorBlock({ name, setColor }) {
  const needDarkText = ["white", "lavender", "yellow", "pink"];

  const textColor = needDarkText.includes(name) ? "black" : "white";
  return (
    <button onClick={() => setColor(name)}>
      <div style={{ backgroundColor: name }} className={`w-18 h-8 border rounded-2xl`}>
        <p style={{ color: textColor }} className="text-center text-amber-50 capitalize ">
          {name}
        </p>
      </div>
    </button>
  );
}
