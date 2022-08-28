import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Routes, Route, Link } from "react-router-dom";

interface Icharacter {
  name: string,
  birth_year: string | number,
  films: Array<string>, 
  homeworld: string,
  species: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  url: string
}



const Character = () => {


  const [character, setCharacter] = useState<Icharacter>({});
  const [movies, setMovies] = useState<string[]>([]);
  
  let params = useParams(); 

    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${params.id}`)
      .then((res) => {
        console.log('res data', res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
    }, []);
  
    //console.log(character, 'character');

    useEffect(() => {
      // If there is actual character data, 
      if(character.films && character.films.length > 0) {
        //make an axios call for each of the films that they were in
        //make these axios calls in parallel
        const promises = character.films.map((film) => {
          return axios.get((film));
        })
        Promise.all(promises).then((responses) => {
          let filmData = responses.map((response) => {
            return response.data;
          })
          setMovies(filmData);
        
        })
        .catch((err) => {
          console.error(err);
        });
      }

    }, [character]);//everytime character changes, gonna run this useEffect()
    //console.log(movies, 'movies');

    


  return (
    
    <div>
      <h1 className='appearances-header'>{character.name} has appeared in the following films:</h1>
      <Link to={'/'} className='return-link'>Return to Character List</Link>
      {movies.map((movie) => {
          return (
            <Card style={{ width: '18rem' }} className='film-cards'>
      <Card.Body>
        <Card.Title key={movie.title}>{movie.title}</Card.Title>
        <Card.Text>{movie.opening_crawl}</Card.Text>
        <Card.Text>
            {movie.title} (episode {movie.episode_id}), was directed by {movie.director} and was produced by {movie.producer}.
            This film was released on {moment(movie.release_date).format('dddd MMMM Do, YYYY')}.
        </Card.Text>
      </Card.Body>
    </Card>

          )
        })}
    </div>

  );

};

export default Character;