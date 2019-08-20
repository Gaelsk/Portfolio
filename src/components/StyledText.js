import React from "react"
import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 4rem;
    color: #6E6E6E;
    
    @media only screen and (max-width: 550px) {
        font-size: 2.2rem;
    }
`
export const SubTitle = styled.h3`
    font-size: 3rem;
    color: #6E6E6E;

    @media only screen and (max-width: 550px) {
        font-size: 2rem;
    }
`
export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    color: teal
    text-decoration: underline;

    @media only screen and (max-width: 550px) {
        font-size: 1.8rem;
    }
`