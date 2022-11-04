import axios from 'axios';

export default axios.create({
  baseURL: 'https://feriasapp-api.onrender.com/api/v1/ferias',
});
