import { useState, useEffect } from "react";
import { Button } from "@repo/ui/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <div className="rounded-lg border bg-card p-6 shadow-lg">
          <p className="mb-4 text-card-foreground">
            Welcome to the admin interface!
          </p>
          <div className="flex gap-4">
            <Button
              variant="default"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </Button>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button
              variant="destructive"
              onClick={() => setCount((count) => count - 1)}
            >
              Decrease
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Using theme colors with dark mode support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
