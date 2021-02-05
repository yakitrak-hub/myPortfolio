import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_AlienInvaders from "../../assets/img/projects/AlienInvaders.webp";
import L_Planet from "../../assets/img/projects/PlanetX.webp";
import L_Embed from "../../assets/img/projects/Embedded.webp";
import L_Prod from "../../assets/img/projects/Productivity.webp";
import L_Color from "../../assets/img/projects/Color.webp";
import L_Visual from "../../assets/img/projects/Visual.webp";
import L_Lambda from "../../assets/img/projects/Lambda.webp";


import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";


import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import L_PYTHON from "../../assets/img/skills/python.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_C from "../../assets/img/skills/c.svg";
import L_OCAML from "../../assets/img/skills/ocaml.svg";





import "./projects-timeline.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Alien Invaders*/}
        <ImageEvent
            date="12/02/2017"
            className="text-center"
            text="Alien Invaders"
            src={L_AlienInvaders}
            alt="Alien Invaders"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a recreation of the classic Breakout game called Space Invaders in python. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Multiple waves of aliens</li>
                          <li>Appropriate sound effects for game events</li>
                          <li>Dynamic system of speeding up aliens</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PYTHON
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/yakitrak-hub/Space-Invaders"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

            {/* Project: ColorModel */}

            <ImageEvent
            date="12/20/2017"
            className="text-center"
            text="ColorModel App"
            src={L_Color}
            alt="ColorModel App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An ColorModel GUI that allows you to convert, try and see different colors.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Works for any ColorModel (HSV/RGB/CMYK)</li>
                          <li>Can change colors by moving sliders/buttons/typing numbers</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                          <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PYTHON
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/yakitrak-hub/ColorModel-Application"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>



{/* Project: GUI Project */}
<ImageEvent
            date="05/09/2018"
            className="text-center"
            text="PlanetX GUI"
            src={L_Planet}
            alt="PlanetX GUI"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Made an app that flies to Planet X to rescue a ship in distress and then return safely to Earth. (It rescues a ship in distress at a far-off planet, Planet X. On the way back to Earth, it picks up as many gems on planets as possible --but return before running out of fuel!)
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Uses shortest path first method</li>
                          <li>There is a GUI for the 2D map of the planets</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
        
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yakitrak-hub/PlanetX-GUI"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Embedded C Project */}
          <ImageEvent
            date="09/07/2018"
            className="text-center"
            text="Embedded Systems Project"
            src={L_Embed}
            alt="Embedded Systems Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Made a snake game with my partner on LEDs using C as an Embedded Systems Project
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Interrupt Handler for Game Logic</li>
                          <li>Set up and used I2C Protocol</li>
                          <li>Used FRDM board to control movement of snake</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="C"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C
                            </span>
                          </li>
  
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                <UrlButton
                  href="https://github.com/yakitrak-hub/SnakeGame"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=9KVBhZo6K5U&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Command Line Productivity App */}
          <ImageEvent
            date="04/12/2019"
            className="text-center"
            text="Command Line Productivity App"
            src={L_Prod}
            alt="Command Line Productivity App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Built a command-line productivity app where users can enter commands to create and edit tasks with a description, deadline, priority and category. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can list all tasks and filter by deadlines or any other feature. In fact, there are many other things they can do with the tasks!</li>
                          <li>User can see recommended order to complete the tasks color coded by emergency</li>
                          <li>JSON and Yojson used to load the data</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_OCAML}
                                alt="OCaml"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              OCaml
                            </span>
                          </li>
                        
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
               
                <UrlButton
                  href="https://github.com/yakitrak-hub/command-line-productivity-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

        
          {/* Project: Climate Change Visualization */}

          <ImageEvent
            date="08/22/2020"
            className="text-center"
            text="Climate Change Visualization"
            src={L_Visual}
            alt="Climate Change Visualization"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> It shows 3 separate plots focusing on fossil fuel consumption and greenhouse gas emissions.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Shows trends in US Fossil Fuel Consumption</li>
                          <li>Shows US Energy Consumption by Sector</li>
                          <li>Shows CO2 Emissions by Transport Sector</li>
                      
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                   
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yakitrak-hub/Climate-Change-visualization"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Lambda Code Runner */}
          <ImageEvent
            date="12/12/2020"
            className="text-center"
            text="Lambda Code Runner"
            src={L_Lambda}
            alt="Lambda Code Runner"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Created artificial intelligence for a simple treasure finding game called Lambda Code Runner.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Used my own RML interpreter for shell scripts for playing the game</li>
                          <li>Robots communicate using the send and recv primitives.</li>
                          <li>Robots manipulate the game state (moving around, picking up gold, sensing, etc) through a server that processes actions.</li>
                        
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_OCAML}
                                alt="OCaml"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              OCaml
                            </span>
                          </li>
                     
                        </ul>
     
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/yakitrak-hub/Lambda-Code-Runner"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;