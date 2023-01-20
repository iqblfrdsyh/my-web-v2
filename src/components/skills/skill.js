import { Accordion, ProgressBar, Row, Col } from "react-bootstrap";
import "./skills.css";

const Skills = () => {
  const htmlcss = 75;
  const mongodb = 25;
  const bootstrap = 50;
  const JS = 30;
  const figma = 40;
  return (
    <section id="skills" className="skills">
      <div className="Container pt-4" id="about">
        <Row>
          <Col>
            <h3 className="title text-center fw-bold">Skills</h3>
            <p className="info-title text-center" style={{ opacity: "0.5" }}>
              My technical level
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <i class="bi bi-braces"></i>
                  <span style={{ color: "slateblue", marginRight: "6px" }}>
                    Frontend
                  </span>
                  Developer
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ opacity: 1 }}>HTML / CSS</p>
                  <ProgressBar animated now={htmlcss} label={`${htmlcss}%`} />
                  <p style={{ opacity: 1 }}>Bootstrap</p>
                  <ProgressBar
                    animated
                    now={bootstrap}
                    label={`${bootstrap}%`}
                  />
                  <p style={{ opacity: 1 }}>Javascript</p>
                  <ProgressBar animated now={JS} label={`${JS}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <i class="bi bi-server"></i>
                  <span style={{ color: "slateblue", marginRight: "6px" }}>
                    Backend
                  </span>
                  Developer
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ opacity: 1 }}>MongoDB</p>
                  <ProgressBar animated now={mongodb} label={`${mongodb}%`} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <i class="bi bi-grid"></i>
                  UI / UX
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ opacity: 1 }}>Figma</p>
                  <ProgressBar animated now={figma} label={`${figma}%`} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Skills;
