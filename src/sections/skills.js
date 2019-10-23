import React from 'react'
import {SectionTitle} from '../components/StyledText'
import FadeSection from '../components/FadeSection'

export default () => {
  return (
      <FadeSection id="skills">
          <SectionTitle>Skills</SectionTitle>
          <p>I used to work with many technologies from the frontend to the backend: </p>
          <ul>
              <li>Html, Css, Bootstrap</li>
              <li>Javascript</li>
              <li>React  (for building complex ui)</li>
              <li>Redux  (for state management)</li>
              <li>Nodejs, Express  (for the backend)</li>
              <li>React Native  (for android and ios mobile app development)</li>
              <li>MongoDB  (database)</li>
              <li>RestFul api</li>
              <li>GraphQl</li>
          </ul>
      </FadeSection>
  )
}
