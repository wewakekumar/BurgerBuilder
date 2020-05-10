import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-my-burger-c15b5.firebaseio.com/'
});

export default instance;