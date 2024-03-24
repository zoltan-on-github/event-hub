import axios from "axios";

const production = import.meta.env.PROD

var API_ENDPOINT = 'http://localhost:3000'
if (production) {
    API_ENDPOINT = 'http://localhost:8081'
}

export default axios.create({baseURL: API_ENDPOINT})

