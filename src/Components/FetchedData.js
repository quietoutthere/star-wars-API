import axios from 'axios';
import Table from 'react-bootstrap/Table';

function componentDidMount() {
    axios.get('https://swapi.dev/api/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    )
  }

export default componentDidMount;