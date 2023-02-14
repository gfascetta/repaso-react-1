import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    body{
        margin:0;
        background-color: #000000;
        color: #fff;
    }

    a{
        text-decoration: none;
        transition: all .3s all;
        color: #fff;

        &:visited{
            color:#fff;
        }
        &:hover{
            color:#4747cb;
            transition: all .3s all;
        }
    }


`;