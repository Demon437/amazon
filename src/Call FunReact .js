function CallFunReact() {
  function calling() {
    alert("Hello World");
  }
  return (
    <div>
      <h2>Call Function in React</h2>
      <button onClick={calling}>Click Now</button>
    </div>
  );
}
export default CallFunReact;
