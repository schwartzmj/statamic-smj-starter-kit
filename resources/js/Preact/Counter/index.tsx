import { useState } from "preact/hooks";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="theme-container mx-auto py-20">
      <h1>This is the Preact Counter component.</h1>
      <button class="btn mt-4" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default Counter;
