import axios from "axios";

const response = axios.create({ 
    baseURL: "https://api.github.com/",
});

export default response;