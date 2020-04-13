import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://my-burger-app-67421.firebaseio.com/'
});

export default instance;