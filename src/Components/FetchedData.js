import { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

function ComponentDidMount ({ search }) {

  const [index, setIndex] = useState('')

    useEffect(() => {
      Axios.get('https://swapi.dev/api/')
      .then(response => {
        console.log('Getting from :', response.data);
        setIndex(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  
    }, [])

    
      // return (
      //   <tr>
      //     <td>{}</td>
      //     <td></td>
      //     <td></td>
      //     <td></td>
      //     <td></td>
      //     <td></td>
      //   </tr>
      // )
    
    

  
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