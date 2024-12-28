import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">Admin Dashboard</h1>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <p className="mb-4">Welcome to the admin interface!</p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
