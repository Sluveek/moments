import axios from "axios";

axios.defaults.baseURL = 'https://drf-api777-490a96ec82c3.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.widthCredentials = true
