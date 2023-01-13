import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table2-paginator';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

function FetchedData({ search }) {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  let url ='https://swapi.dev/api/people/';

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
        }
        setCharacters(chars);
        setLoading(true);
        
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
              {loading ? (
              { tableBody }
              ) : (
                <ReactBootstrap.Spinner animation='border' className="spinner"/>
              )}
            </tbody>
          </Table>
      </>

  )}

export default FetchedData;
