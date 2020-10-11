import {useState, useEffect} from 'react'
import { getReceta } from '../helpers/getReceta'

 
export const useFecthReceta = () => {
    const [state, setstate] = useState({
        data: []
    })
        
    useEffect(()=>{
            getReceta ()
            .then(places => {
                setstate({
                    data:  places
                })
            })
    }, [])


    return state;
}
