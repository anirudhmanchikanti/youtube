import axios from 'axios';
const KEY = 'AIzaSyDdASMDcjKs1J8RNQ0OJLRCdk_xsxVRiJs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})