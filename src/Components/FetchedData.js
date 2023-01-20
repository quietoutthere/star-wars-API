import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React from 'react';
import PaginationFunctions from './PaginationFunctions';

function FetchedData({search, url, setUrl}) {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  
  const getCharacterData = async (characterData) => {
    const { data } = await axios.get(characterData)
    return data.name;
  };


  useEffect(() => {

    const getData = async () => {
      
      const response = await axios.get(url);
      const chars = response.data.results; 
      const searchResults = chars.filter(names => names.name.includes(search))

      console.log('url:', url)

      for (const char of chars) {
        char.homeworldName = await getCharacterData(char.homeworld);
        char.speciesName = await getCharacterData(char.species);
            if (!char.speciesName) {
          char.speciesName = "Human"
        }
      }
      
      if(search === '') {
        setCharacters(chars)
      } else {
        setCharacters(searchResults)
      }
    
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
        url = {url}
        setUrl = {setUrl}
        search = {search}
       />
    </>
  )
}

export default FetchedData;
