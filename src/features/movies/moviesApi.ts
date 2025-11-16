import axios from "axios";

const API_KEY = '64405bd2';

export const searchMovies = async (query: string): Promise<any> => {
    const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    return response.data.Search;
};

export const getMovieById = async (id: string): Promise<any> => {
    const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    return response.data;
};