import React, { useState, useEffect } from 'react';

const Pokemon = () => {

    const [poke, setPoke] = useState([])

    // Shows API data without needing to click the button
    // useEffect(()=>{
    //     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    //         .then(pokemonData => {
    //             return pokemonData.json()
    //         })
    //         .then(pokemonData => {
    //             console.log(pokemonData.results)
    //             setPoke(pokemonData.results)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    const getPokemon = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(pokemonData => {
                return pokemonData.json()
            })
            .then(pokemonData => {
                console.log(pokemonData.results)
                setPoke(pokemonData.results)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Pokemon To Catch</h1>
            <button onClick={getPokemon}>Get Pokemon Names</button>
            {
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Pokemon ID</th>
                            <th>Name</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            poke.map((pokeObj, i) => {
                                return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{pokeObj.name}</td>
                                        <td>{pokeObj.url}</td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
export default Pokemon