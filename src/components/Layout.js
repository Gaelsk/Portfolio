import React from 'react';
import NavToggler from './toggler'
import {ScrollingProvider, SectionLink, Section} from 'react-scroll-section'

const Layout = ({children}) => {
    return (
        <div className="container">  
            <header>
                <nav>
                    <NavToggler/>
                    <ul>
                        <li>
                          <SectionLink 
                            section="about">{
                            ({onClick}) => (<span onClick={onClick}>About</span>)
                            }
                          </SectionLink>
                        </li>
                        <li>
                          <SectionLink section="skills">{
                            ({onClick}) => (<span onClick={onClick}>Skills</span>)
                            }
                          </SectionLink>
                        </li>
                        <li>
                          <SectionLink section="projects">{
                            ({onClick}) => (<span onClick={onClick}>Projects</span>)
                           }
                          </SectionLink>
                        </li>
                        <li>
                          <SectionLink section="contacts">{
                            ({onClick}) => (<span onClick={onClick}>Contacts</span>)
                            }
                          </SectionLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>

            <footer>
              <Section id="contacts">
                <div className='d-flex'>
                  <p><a href="https://www.linkedin.com/in/gaël-houngbedji-b3256718a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  <p><a href="https://www.github.com/gaelsk" target="_blank" rel="noopener noreferrer">Github</a></p>
                </div>
                <div>
                    <p>+229 66636148</p>
                    <p>gaelhoungbedji@gmail.com</p>
                </div>
                <div style={{textAlign: "center", marginTop: 16}}>Created by Gael HOUNGBEDJI</div>
                </Section> 
              </footer>
        </div>
    )
} 
  
export default ({children}) => (
  <ScrollingProvider>
    <Layout children={children}/>
  </ScrollingProvider>
)