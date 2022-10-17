import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4ad8706864msh8e7b907d164703bp1bcf08jsn9817db6e2181',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }  
    });
    return data;
}