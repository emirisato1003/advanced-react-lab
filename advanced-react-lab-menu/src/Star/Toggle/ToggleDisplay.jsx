import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ({ children }) {
    const { on } = useContext(ToggleContext);

    return children(on);
}