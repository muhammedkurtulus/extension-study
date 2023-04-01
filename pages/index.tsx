import { Button } from "primereact/button";
import { useState } from "react";
export default function Home() {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex flex-column">
        <h1>Welcome to My Extension</h1>
        <Button onClick={() => setState(!state)}>Button</Button>
        {state && <h1>Clicked</h1>}
      </div>
    </>
  );
}
