import axios from 'axios';

window.axios = axios;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
