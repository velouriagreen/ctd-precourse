import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


interface ifilm {
  characters: Array<string>,
  director: string,
  episode_id: number,
  opening_crawl: string,
  planets: Array<string>,
  producer: string,
  release_date: string | Date,
  species: Array<string>,
  starships: Array<string>,
  title: string,
  url: string, 
  vehicles: Array<string>,

}


const Films = () => {
  // console.log('films from Films', films);
  const [films, setFilms] = useState([]);


  const allFilms = (() => {
    useEffect(() => {
      axios.get('https://swapi.dev/api/films/')
      .then((res) => {
        console.log('planets', res.data.results);
        setFilms(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      })
    },[]);
  })



  return (
    <div>
      <h1>Films</h1>
    </div>
  )
};

export default Films;