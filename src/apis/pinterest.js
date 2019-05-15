import axios from 'axios';

const PINTEREST_KEY = '5032892307393789229';

export default axios.create({
  baseURL: 'https://api.pinterest.com/oauth/',
  params: {
    response_type	: 'code',
    client_id: PINTEREST_KEY,
    scope: PINTEREST_KEY,
    redirect_uri: 'https://localhost:3000'
  }
});
