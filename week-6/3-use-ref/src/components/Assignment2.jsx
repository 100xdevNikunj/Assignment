// Create a component that tracks and displays the number of times it has been rendered. Use useRef to
// create a variable that persists across renders without causing additional renders when it changes.

import React, { useState, useRef, useEffect } from 'react';

export function Assignment2() {
    const [forceRender, setForceRender] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });

    const handleReRender = () => {
        // Update state to force re-render
        renderCount.current += 1;
        setForceRender(Math.random());
    };

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};