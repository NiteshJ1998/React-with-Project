function ButtonExample() {
  function handleClick() {
    alert("button click");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ButtonExample;
