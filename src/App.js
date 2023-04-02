import logo from "./logo.svg";
import "./App.css";
import StakeCard from "./harmonypunks";
import HarmonyPunks from "./StakeCard";
import Blockchaindata from "./Blockchaindata";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./Navbartop";
import { Col, Container, Row } from "react-bootstrap";
import video_bg from "./Images/app_Background.mp4";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
   
      <>
        <div className="back">
          <Navbartop />

            <video autoPlay muted loop playsinline id="myVideo" >
                <source src={video_bg} type="video/mp4" />
              </video>
              <HarmonyPunks />
              <Container style={{paddingTop: "200px"}}>
                <Row>
                  {" "}
                  
                  <Col md={12}>
             
                    {" "}
                    <StakeCard />
                  </Col>
                  <Col md={12} style={{marginTop: "200px"}}>
                    {" "}
                    <Blockchaindata />
                  </Col>
                </Row>
              </Container>
         
         
     

        </div>
      </>
 
  );
}

export default App;
