import { useEffect } from "react";
import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //     Explanation:

  // The function inside useEffect runs after render.

  // The [] (dependency array) tells React when to run the effect:

  // [] → run only once (on mount)

  // [count] → run whenever count changes

  //     console.log("components rendered or count changed");
  //   }, [count]);

  //   ================================================================

  //   2️⃣ Side Effects (Fetching Data, Timers, etc.)

  // Example 1 – Fetch data once on load:

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []); // runs only once

  //   Example 2 – Timer (setInterval):

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
