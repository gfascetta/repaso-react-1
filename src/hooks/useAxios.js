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
            let selectedCharacter = character.trim()
            console.log("selecterChatacter==>", selectedCharacter)
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${selectedCharacter}`)
            console.log("data del fetch==>", data)
            setData(data)
        }catch(error){
            console.log("error ==>", error)
            setError('hubo un error')
        }
        setIsLoading(false)
    }
    return {data, isLoading, error, handleSubmit}
}