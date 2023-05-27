import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Format Camera",
      description: "Front-End Development",
      imgUrl: projImg1,
    },
    {
      title: "Hotels in Singapore",
      description: "Front-End Development",
      imgUrl: projImg2,
    },
    {
      title: "Pin Point",
      description: "Front-End Development",
      imgUrl: projImg3,
    },
    {
      title: "Mobile Shop",
      description: "Front-End Development",
      imgUrl: projImg4,
    },
    {
      title: "Not Much THYME",
      description: "Front-End Development",
      imgUrl: projImg5,
    },
    {
      title: "Reel Good Reviews",
      description: "Front-End Development",
      imgUrl: projImg6,
    },
  ];

  const secondProjects = [
    {
      title: "Citrus",
      description: "Front-End Development",
      imgUrl: projImg7,
    },
    {
      title: "Davie's Burgers",
      description: "Front-End Development",
      imgUrl: projImg8,
    },
    {
      title: "Form A Story",
      description: "Front-End Development",
      imgUrl: projImg9,
    },
    {
      title: "Task List",
      description: "Front-End Development",
      imgUrl: projImg10,
    },
    {
      title: "Number Gusser",
      description: "Front-End Development",
      imgUrl: projImg11,
    },
    {
      title: "Piano PLayer",
      description: "Front-End Development",
      imgUrl: projImg12,
    },
  
  ];
  
  const thirdProjects = [
    {
      title: "Format Camera",
      description: "Front-End Development",
      imgUrl: projImg1,
    },
    {
      title: "Hotels in Singapore",
      description: "Front-End Development",
      imgUrl: projImg2,
    },
    {
      title: "Pin Point",
      description: "Front-End Development",
      imgUrl: projImg3,
    },
    {
      title: "Mobile Shop",
      description: "Front-End Development",
      imgUrl: projImg4,
    },
    {
      title: "Not Much THYME",
      description: "Front-End Development",
      imgUrl: projImg5,
    },
    {
      title: "Reel Good Reviews",
      description: "Front-End Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a self-taught front-end developer. I primarily focus on writing clean, elegant, and efficient code. I am proficient in HTML, CSS, JavaScript and React.JS. I also review existing code and can consult with you on.</p>
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
