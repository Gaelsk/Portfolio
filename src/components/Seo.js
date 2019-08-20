import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'; 

const SEO = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.author}`} />
    )
}
 
export default SEO;