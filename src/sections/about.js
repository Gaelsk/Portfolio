import React from 'react'
import {SectionTitle} from '../components/StyledText'
import Icon from '../components/icon'
import {Section} from 'react-scroll-section'



export default () => {
  return (
        <Section id="about">
          <div className="profile-image"/>
          <SectionTitle>About <Icon icon="🙋‍♂️"/></SectionTitle>
          <p>I'm a self taught Javascript developer from Benin. I start coding two years ago. I like coding because it helps me to figure out how to solve problems and think in real life. I'm self-motivated, adaptable and a <strong>perpetual learner</strong>.</p>
          <p>I've not done a remote work yet but i'm very curious and would like to collaborate with a team or company in order to bring value to them and to improve my skills. I enjoy working in a fun and challenging environment.</p>
        </Section>
  )
}
