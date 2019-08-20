import React from 'react'
import {SectionTitle} from '../components/StyledText'
import ProjectCard from '../components/ProjectCard'
import {graphql, useStaticQuery} from 'gatsby';
import Icon from '../components/icon'
import {Section} from 'react-scroll-section'

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
    <Section id="projects">
        <SectionTitle>Projects <Icon icon="💻"/></SectionTitle>
        <div className="ProjectList">
            {data.allMarkdownRemark.edges.map(edge => (
              <ProjectCard 
                title={edge.node.frontmatter.title} 
                href={edge.node.frontmatter.href} 
                description={edge.node.html}
              />
            ))}
        </div>
    </Section>
  )
}
