import React from 'react'
import {SectionTitle} from '../components/StyledText'
import ProjectCard from '../components/ProjectCard'
import {graphql, useStaticQuery} from 'gatsby';
import Icon from '../components/icon'
import FadeSection from '../components/FadeSection'


export default () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        href
                    }
                    html
                }
            }
        }
    }
`)
  return (
    <FadeSection id="projects">
        <SectionTitle>Projects <Icon icon="💻"/></SectionTitle>
        <div className="ProjectList">
            {data.allMarkdownRemark.edges.map((edge, i) => (
              <ProjectCard 
                key={i}
                title={edge.node.frontmatter.title} 
                href={edge.node.frontmatter.href} 
                description={edge.node.html}
              />
            ))}
        </div>
    </FadeSection>
  )
}
