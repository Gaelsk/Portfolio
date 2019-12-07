import React from 'react';
import styled from 'styled-components'

const ProjectCard = styled.a`
    position: relative;
    width: calc(50% - 2rem);
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    padding: 0.6rem;
    margin: 0.6rem 0.4rem;
    transition: 1s;
    border-radius: 4px;
    font-size: 1.2rem;
    text-decoration: none;
    color: #3d3d3d;
    background-color: #fff;

    &:hover {
        transform: translateY(-8px);
    }
    & h2 {
        color: teal;
    }

    @media screen and (max-width: 600px) {
        width: calc(100% - 4px);
    }
`

export default ({title, href, description}) => (
    <ProjectCard href={href} target="_blank" rel="noopener noreferrer">
        <article>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: description}}></div>
        </article>
    </ProjectCard>
)