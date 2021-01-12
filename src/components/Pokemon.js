import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [pokeData, setPokeData] = useState([])

    // Shows API data without needing to click the button
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(pokemonData => {
                console.log("*************")
                console.log(pokemonData.data.results)
                console.log("*************")
                setPokeData(pokemonData.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    // Shows API data after clicking button (if useEffect isn't commented out, you can only see this in the console)
    const getPokemon = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(pokemonData => {
                console.log("*************")
                console.log(pokemonData.data.results)
                console.log("*************")
                setPokeData(pokemonData.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Pokemon To Catch</h1>
            <button onClick={getPokemon} className="btn btn-success">Get Pokemon Names</button>
            {
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Pokemon Id</th>
                            <th>Name</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pokeData.map((pokeObj, i) => {
                                return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{pokeObj.name}</td>
                                        <td><a href={pokeObj.url}>{pokeObj.url}</a></td>
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