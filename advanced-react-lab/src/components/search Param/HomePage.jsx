import React from 'react';
const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" }
];
export default function HomePage() {
    const charEls = swCharacters.map(({ name, type }) => (
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
