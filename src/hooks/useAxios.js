import axios from "axios";
import { useState } from "react";


export const useAxios = () => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async(evento,character) => {
        evento.preventDefault();
        setData(null)
        setError(false)
        setIsLoading(true)
    
        try{
            // let selectedCharacter = character.trim()
            // console.log(selectedCharacter)
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character`)
            console.log(data)
            setData(data)
        }catch(error){
            console.log(error)
            setError('hubo un error')
        }
        setIsLoading(false)
    }
    return {data, isLoading, error, handleSubmit}
}