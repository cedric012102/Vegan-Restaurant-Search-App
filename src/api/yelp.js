import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer lec56Vbq9R_hw0M5UUiguU0DJTPEjKqKz04C_RrvfMYBC_LSfnWB1AFWLLq8Am-yrQXzTnITovSQXtlipgf0R-QArz757L1hxOdkoQ8LeWDCa9ayyKkCjpZNMdmuX3Yx'
    }
});