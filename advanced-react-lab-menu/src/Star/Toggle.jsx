import React from 'react';

export default function Toggle() {
    const [starred, setStarred] = useState(false);
    function toggle() {
        setStarred(prev => !prev);
    }
    return (
        
    )
}
