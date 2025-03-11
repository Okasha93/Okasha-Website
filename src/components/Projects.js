import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/4.png";
import projImg2 from "../assets/img/5.png";
import projImg3 from "../assets/img/6.png";
import projImg4 from "../assets/img/1.png";
import projImg5 from "../assets/img/2.png";
import projImg6 from "../assets/img/3.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import projImg10 from "../assets/img/10.png";
import projImg11 from "../assets/img/11.png";
import projImg12 from "../assets/img/12.png";
import projImg13 from "../assets/img/13.png";
import projImg14 from "../assets/img/14.png";
import projImg15 from "../assets/img/15.png";
import colorSharp2 from "../assets/img/13.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg1,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg2,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg3,
    },
    {
      title: "Expense Tracker",
      description: "Mobile App Development",
      imgUrl: projImg4,
    },
    {
      title: "MeetusAR",
      description: "Mobile App Development",
      imgUrl: projImg5,
    },
    {
      title: "Find Job",
      description: "Mobile App Development",
      imgUrl: projImg6,
    },
  ];

  const secondProjects = [
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg7,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg8,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg9,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg10,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg11,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg12,
    },

  ];

  const thirdProjects = [
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg13,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg14,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg15,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg1,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg2,
    },
    {
      title: "Online Shop",
      description: "Mobile App Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I am a highly motivated Mobile App Developer with a strong foundation in React Native, Expo, and modern front-end technologies. With a passion for crafting elegant, efficient, and scalable applications, I have successfully developed and contributed to multiple projects, transforming complex ideas into user-friendly mobile experiences.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            secondProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            thirdProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
