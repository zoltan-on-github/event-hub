import axios from "axios";

const production = import.meta.env.PROD

var API_ENDPOINT = 'http://localhost:3000'
if (production) {
    // custom JSON Server container
    //API_ENDPOINT = 'http://localhost:8081'

    // JSON Server hosted on typicode.com
    API_ENDPOINT = 'https://my-json-server.typicode.com/zoltan-on-github/event-hub-data'
}

export default axios.create({baseURL: API_ENDPOINT})

