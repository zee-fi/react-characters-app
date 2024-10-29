import axios from 'axios';
import { useEffect, useState } from 'react';

function Homepage () {
    
    const [characters, setCharacters] = useState(null);
    
    useEffect(() => {
        axios.get("https://ih-crud-api.herokuapp.com/characters")
        .then ((response) => {
            setCharacters(response.data);
        })
        .catch (e => console.log(e))

    })

return(
    <>
        <h2>List of Characters in our App</h2>

        {characters === null 
        ? <h2>Loading</h2>
        : <h2>Number of characters is: {characters.length}</h2>
        }

        {characters &&
        characters.map((element, index) => {
            return (
                <div key={index}>
                    <h3>{element.name}</h3>
                    <p>{element.weapon}</p>
                    <p>{element.occupation}</p>
                </div>
            )
        })}
    </>
)
}

export default Homepage;