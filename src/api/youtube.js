import axios from 'axios'

const KEY = 'AIzaSyAeaFxh8e7L1LM7d4V4Qnc255w8g-iYPSc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})