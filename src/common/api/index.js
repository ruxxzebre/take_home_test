import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-prod.workhorsescs.pro/api'
});
