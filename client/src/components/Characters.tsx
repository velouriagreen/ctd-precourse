import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";




import Card from 'react-bootstrap/Card';
import path from 'path/posix';


interface Icharacter {
  name: string,
  birth_year: string | number,
  hair_color: string,
  height: string | number,
  films: Array<string>, 
  homeworld: string,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  url: string
}

const Characters = () => {


  const [characters, setCharacters] = useState<Icharacter[]>([]);
  

    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        console.log('res data', res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      })
    }, [])
  


  
  console.log('characters in Character');
  return (
    <div>
      {characters.map((character) => {
        const id = character.url.split('/').at(-2);
        // console.log('ha', id)
        return (
          <Card style={{ width: '18rem' }} className='card'>
          <Card.Body>
            <Card.Title className='card-title'>{character.name}</Card.Title>
            <Card.Text>
              {character.name} was born in the year of {character.birth_year}.
              {character.hair_color !== 'n/a' ? (<Card.Text>They have {character.hair_color} colored hair and stand at a height of {character.height} cm.</Card.Text>) : (<Card.Text>They have no hair whatsoever and stand at {character.height} cm tall</Card.Text>) }
            </Card.Text>
            <Link to={`/character/${id}`} key={id}>Click here for list of {character.name}'s film appearances</Link>
          </Card.Body>
        </Card>
        )
      })}
    </div>

  );

};

export default Characters;