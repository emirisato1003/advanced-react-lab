import React from 'react';
import { useSearchParams } from 'react-router-dom';
const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" }
];
export default function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const filteredChar = typeFilter 
    ? swCharacters.filter(({type}) => type.toLowerCase() === typeFilter) 
    : swCharacters

    const charEls = filteredChar.map(({ name, type }) => (
        <div key={name}>
            <h3>Name: {name}</h3>
            <p>Type: {type}</p>
        </div>
    ));
    return (
        <main>
            <h2>Home</h2>
            {charEls}
        </main>
    );
}
