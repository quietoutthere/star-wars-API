import axios from 'axios';

function componentDidMount() {
    axios.get('https://swapi.dev/api/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

export default componentDidMount;