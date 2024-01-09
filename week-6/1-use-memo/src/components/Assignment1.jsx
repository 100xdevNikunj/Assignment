import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);

    function factorial(n){
        let fact=1;
        for(let i=1;i<=n;i++){
            fact*=i;
        }
        return fact;
    }

    const expensiveValue = useMemo(() => {
      return factorial(input)
    },[input]); 

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}