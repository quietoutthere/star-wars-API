import { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

function FetchedData({ search }) {

  const [characters, setCharacters] = useState([]);
  const [homeworld, setHomeworld] = useState([]);

    useEffect(() => {
      Axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log('Getting from :', response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
      Axios.get('https://swapi.dev/api/planets/1/')
      .then(response => {
        console.log('Getting from :', response.data.results);
        setHomeworld(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])
    
    const tableBody = characters.map((character) => {
      return (
        <tr id={Math.random()} key='id'>
          <td>{ character.name }</td>
          <td>{ character.birth_year }</td>
          <td>{ character.height }</td>
          <td>{ character.mass }</td>
          <td>{ homeworld }</td>
         
        </tr>
      )
    });
    
    return (
        <Table striped bordered hover variant="dark">
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