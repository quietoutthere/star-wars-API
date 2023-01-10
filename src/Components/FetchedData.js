import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function FetchedData({ search }) {

  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState('https://swapi.dev/api/people/')

  const getCharacterData = async (homeworldUrl) => {
    const { data } = await axios.get(homeworldUrl)
    return data.name;
  };

    useEffect( () => {
      const getData = async () => {
        const response = await axios.get(url);
        const chars = response.data.results;
        
        for (const char of chars) {
          char.homeworldName = await getCharacterData(char.homeworld);
          char.speciesName = await getCharacterData(char.species)
            if (!char.speciesName ) {
              char.speciesName = "Human"}

          console.log(chars)
        }
        setCharacters(chars);
        
      }
      getData();
    }, [])

    
    const tableBody = characters.map((character) => {
      return (
        <tr>
          <td>{ character.name }</td>
          <td>{ character.birth_year }</td>
          <td>{ character.height }</td>
          <td>{ character.mass }</td>
          <td>{ character.homeworldName }</td>
          <td>{ character.speciesName }</td>
        </tr>
      )
    });
    
    return (
        <Table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Homeworld</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
             { tableBody }
          </tbody>
    </Table>
    )
  }

export default FetchedData;


// Axios.get(url)
//       .then(response => {
//         console.log('Getting from :', response.data.results);
//         setCharacters(response.data.results);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//       Axios.get('https://swapi.dev/api/planets/')
//       .then(response => {
//         console.log('Getting from :', response.data.results);
//         setHomeWorlds(response.data.results);
//       })
//       .catch(error => {
//         console.log(error);
//       });