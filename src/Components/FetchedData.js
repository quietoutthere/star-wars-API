import { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

function FetchedData({ search }) {

  const [data, setData] = useState([]);

    useEffect(() => {
      Axios.get('https://swapi.dev/api/')
      .then(response => {
        console.log('Getting from :', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }, [])

    const tableBody = data.map((items) => {
      return (
        <tr>
          <td>{ items }</td>
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