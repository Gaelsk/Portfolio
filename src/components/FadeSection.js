import React from 'react'
import {Section} from 'react-scroll-section'
import Fade from "react-reveal/Fade"
 

export default ({children, id}) => (
  <Section id={id}>
    <Fade bottom>
      {children}
    </Fade>  
  </Section>
)