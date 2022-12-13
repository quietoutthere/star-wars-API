import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function ComponentDidMount() {

  const [index, setIndex] = useState()

    useEffect(() => {
      axios.get('https://swapi.dev/api/')
      .then(response => {
        console.log('Getting from :', response.data);
        setIndex(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  
    }, [])

  
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
            
          </tbody>
    </Table>
    )
  }

export default ComponentDidMount;