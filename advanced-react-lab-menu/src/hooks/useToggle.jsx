

function useToggle() {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(prevOn => !prevOn);
    }
}