import { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import axios from "axios";

const API_URL = 'https://content.guardianapis.com/search?api-key=92014cba-8a47-4a12-b0e8-fea5ff503114&page-size=100&show-fields=thumbnail';

function useNews() {
    const {dispatch} = useNewsContext();



    useEffect(() => {
        async function fetchNews() {
            dispatch({type: 'SET_LOADING'})
            try {
                const res = await axios.get(API_URL);
                dispatch({type: "SET_NEWS", payload: res.data.response.results})
                console.log(res.data.response.results);
                
                
            } catch(error) {
                dispatch({type: "SET_ERROR", payload: error.message});
            }
        }
        fetchNews();
        
        
    }, [dispatch])

    return;

}

export default useNews;