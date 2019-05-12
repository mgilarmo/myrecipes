import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyD6Stv0Gvx3yjZCG34Jc4PcKL2FCbkLIkw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBE_KEY
  }
});
