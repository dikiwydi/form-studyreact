import { useState } from "react";
import Button from "./button";
export default function Counter({ coba }) {
    const [count, setCount] = useState(coba);
    function handler() {
        setCount((q) => q + 1);
    }
    return (
        <div>
            <Button onClick={handler}>+1</Button>
            <div className="text-2xl">{count}</div>
            <Button
                onClick={() => {
                    handler();
                    handler();
                    handler();
                }}
            >
                +3
            </Button>
        </div>
    );
}
