import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React from 'react';
import PaginationFunctions from './PaginationFunctions';


function FetchedData() {
  
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://swapi.dev/api/people/?page=1');
  

  const getCharacterData = async (characterData) => {
    const { data } = await axios.get(characterData)
    return data.name;
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      const chars = response.data.results;

      for (const char of chars) {
        char.homeworldName = await getCharacterData(char.homeworld);
        char.speciesName = await getCharacterData(char.species);
            if (!char.speciesName) {
          char.speciesName = "Human"
        }
      }

      setCharacters(chars);
      setLoading(true);

    }
    getData();
  }, [url])


  const tableBody = characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.birth_year}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.homeworldName}</td>
        <td>{character.speciesName}</td>
      </tr>
    )
  });

  return (
    <>
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
          {tableBody}
        </tbody>
      </Table>
      <PaginationFunctions
        characters={characters}
        setCharacters = {setCharacters}
        url = {url}
        setUrl = {setUrl}
        getCharacterData = {getCharacterData}
       />
        
    </>

  )
}

export default FetchedData;
