import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" }
];
export default function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const filteredChar = typeFilter
        ? swCharacters.filter(({ type }) => type.toLowerCase() === typeFilter)
        : swCharacters;

    const charEls = filteredChar.map(({ name, type }) => (
        <div key={name}>
            <h3>Name: {name}</h3>
            <p>Type: {type}</p>
        </div>
    ));

    // create helper function called 'genNewSearchParamString' take a key and a value as a parameter
    const genNewSearchParamString = (key, value) => {
        // set new URLSearchParams constructor to brings up old value of searchParams and initialize new URL search param.
        const sp = new URLSearchParams(searchParams);
        //check if the value is null
        if (value === null) {
            // if it is, delete key
            sp.delete(key);
        } else {
            // if it's not null, set the search param of key equal to whatever the value is that we passed in
            sp.set(key, value);
        }
        // console.log(typeof sp.toString());
        // return the string value using 'toString' method.
        return `?${sp.toString()}`;
    };

    // create a handle function called 'handleFilterChange()', take 'key' and 'value' as its parameters
    const handleFilterChange = (key, value) => {
        //set a setter function of useSearchParams() and take a previous prams
        setSearchParams(prevPram => {
            //check if value is null
            if (value === null) {
                // take a previous prams  and delete key !!! useSearchParams() can modify previous prams
                prevPram.delete(key);
            } else {
                // else : set key and value
                prevPram.set(key, value);
            }
            // return prevParams since we want to return URL search params obj
            return prevPram;
        });
    };
    return (
        <main>
            <h2>Home</h2>
            <div>
                <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
                <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
                <Link to={genNewSearchParamString("type", null)}>Clear</Link>
            </div>
            <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
            <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
            <button onClick={() => handleFilterChange("type", null)}>Clear</button>
            {charEls}
        </main>
    );
}

{/* <Link to="?type=jedi">Jedi</Link>
<Link to="?type=sith">Sith</Link>
<Link to=".">Clear</Link> */}