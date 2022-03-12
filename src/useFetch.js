import {useState, useEffect} from 'react';
const useFetch =(url) =>{
    const[isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);
    const[data, setData] = useState(null);
    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
        }, 1000);
    }, [url])
    return {isPending,error,data};
};

  export default useFetch;