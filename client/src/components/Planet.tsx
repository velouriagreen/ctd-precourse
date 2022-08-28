import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export interface Iplanet {
  climate: string,
  diameter: string | number, 
  films: Array<string>,
  name: string,
  residents: Array<string>,
  terrain: string,
  orbital_period: string | number,
  rotation_period: string | number,

}



  // const allPlanets = (() => {
  //   useEffect(() => {
  //     axios.get('https://swapi.dev/api/planets/')
  //     .then((res) => {
  //       console.log('planets', res.data.results);
  //       setPlanets(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //   },[]);
  // });

const Planet = ({planets}) => {
  console.log('planetas', planets);

  const [planet, setPlanet] = useState< Iplanet | undefined>({
    climate: '',
    diameter: '',
    films: [],
    name: '',
    residents: [],
    terrain: '',
    orbital_period: '',
    rotation_period: ''
  });

  // const getPlanet = ((id: number) => {
  //   axios.get(`https://swapi.dev/api/planets/:${id}`)
  //     .then(res => {
  //       console.log('planet', res.data);
  //     })
  //     .catch(err => {
  //       console.error('error');
  //     })
  // })

  return (
    <div>
      <h1>Planets</h1>
    </div>
  )
};

export default Planet;