import React from "react"
import CompContainer from "../containers/CompContainer"
import LibraryContainer from "./nav-header/LibraryContainer"
import './App.css'
import Nav from "./nav-header/Nav"
import Bar from "./nav-header/Bar"
import Logo from "./nav-header/Logo"
import Navpages from "./nav-header/Navpages"
import Searchbar from "./nav-header/Searchbar"
import Badge from "./badge"
import Banner from "./banner"
import Card from "./card"
import Testimonial from "./testimonial"


export default function App() {

  return (
      <LibraryContainer>
        <Nav onOpen={() => console.log("nav opened")}>
          <Logo/>
          <Searchbar/>
          <Navpages/>
          <Bar/>
        </Nav>
        <CompContainer>
          <Badge>
            {
              (arrayLength, borderRad) => {
                const elements = []

                for (let i=0; i<arrayLength; i++) {   
                  elements.push((
                    <Badge.Item index={i} borderRad={borderRad} key={i}>
                      <p>Badge</p>
                    </Badge.Item>
                  ))
                }

                return elements
              }
            }
          </Badge>
          <Banner>
            {(arrayLength, showDesc) => {
              const elements = []

              for (let i=0; i<arrayLength; i++) {
                elements.push((
                  <Banner.Item num={i} key={i} showDesc={showDesc} />
                ))
              }

              return elements
            }}
          </Banner>
          <Card>
            <Card.Item hover={false} />
            <Card.Item hover={true} />
          </Card>
          <Testimonial>
            <div className="testim-item-set">
              <Testimonial.Item 
                containsPic={true} 
                orientation="horizontal" 
              />
              <Testimonial.Item 
                containsPic={true} 
                orientation="vertical" 
              />
            </div>
            <div className="testim-item-set">
              <Testimonial.Item 
                containsPic={false}
                orientation="horizontal"
              />
              <Testimonial.Item 
                containsPic={false}
                orientation="vertical"
              />
            </div>
          </Testimonial>
        </CompContainer>
      </LibraryContainer>
    )
}
