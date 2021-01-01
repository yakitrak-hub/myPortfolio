import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_EVERNOTE from "../../assets/img/experience/evernote.svg";
import L_CUSD from "../../assets/img/experience/cusd.svg";
import L_GC from "../../assets/img/experience/gamechange.svg";
import L_CORNELL from "../../assets/img/experience/cornell.svg";


import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="c" >EXPERIENCE</h1>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CORNELL} alt="Cornell University logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Research Assistant: Databases and ML</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                   
                    <br />
                    <strong>Duration:</strong> Dec 2020 - Present
                    <br/>
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li> Working with Prof Immanuel Trummer to create a deep neural network model to map numerical claims with their associated SQL queries from any data set containing hand-veri ed claims about numerical aggregates. </li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_EVERNOTE} alt="Evernote logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Summer Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                   
                    <br />
                    <strong>Duration:</strong> June 2020 - Sep 2020
                    <br/>
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li> Feature engineered and trained Billion+ of user data with SQL to assess the best model that can identify credential stuffing and block it in real time.</li>
                      <li> The multi-layered neural network worked best with accuracy of 86%. </li>

                      <li>Utilized Recency-Frequency-Monetary Clustering, Lifetime Value Clustering and Churn Prediction to send messages to users based on their features to increase retention, frequency and revenue generated by these clients for Evernote. 
                      </li>


                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CORNELL} alt="Cornell University logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Research Assistant: Systems and Networking</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                   
                    <br />
                    <strong>Duration:</strong> May 2019 - Jan 2020
                    <br/>
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li> Worked with Prof Robbert Van Renesse to develop a mutually exclusive algorithm in Python that allows multiple machines with different Boolean estimates reach a Consensus Value. </li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CUSD} alt="Cornell University Sustainable Design logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Digital Team Member</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                   
                    <br />
                    <strong>Duration:</strong> Sep 2017 - Feb 2019
                    <br/>
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li> Created a web application, displaying real-time passenger information on TCAT bus shelters. </li>
                      <li> The code is versatile enough to now be implemented in a future addition of a new bus shelter from TCAT. </li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>


      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_GC} alt="GameChange Solutions logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineering Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                   
                    <br />
                    <strong>Duration:</strong> Aug 2018 - Dec 2018
                    <br/>
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li> Deployed company proprietary software on AWS by setting up multiple clusters in ECS console. </li>
                      <li> Enhanced their website’s SEO ranking, added functionality and Google analytics to maximize opportunity creation.</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

  



    
    </div>
  );
};

export default Experience;