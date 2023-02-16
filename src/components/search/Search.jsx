import React, {useState} from 'react';
import styled from 'styled-components';

const InputSearchStyled = styled.input`
    display: inline-flex;
    width: 70%;
    border-radius: 15px;
    padding: 5px;
    background-color: black;
    color: blanchedalmond;
`

const ButtonSubmitStyled = styled.button`
    display: inline-flex;
    width: 20%;
    border-radius: 15px;
    padding: 5px;
    background-color: darkgreen;
    color: blanchedalmond;
`


const Search = ({handleSubmit}) => {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e, inputValue)}>
        <InputSearchStyled type="text" onChange={handleChange} />
        <ButtonSubmitStyled type="submit">Buscar</ButtonSubmitStyled>
    </form>
  )
}

export default Search