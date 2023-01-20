import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./project.css";

const Project = () => {
  const project1 = "./assets/projects/project1.png";
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <section class="project">
      <div class="container pt-4" id="project">
        <h3 class="title text-center fw-bold">Portofolio</h3>
        <p
          class="info-title text-center"
          style={{ opacity: "0.5", color: "#000" }}
        >
          Most recent work
        </p>
        <div class="row justify-content-center content">
          <Carousel variant="dark">
            <Carousel.Item interval={1000}>
              <img
                className={`d-block ${imageClicked ? "blur" : ""}`}
                src={project1}
                alt=""
                onClick={() => setImageClicked(!imageClicked)}
              />
              <Carousel.Caption
                className={`hide-text ${
                  imageClicked ? "show-text" : "hide-text"
                }`}
              >
                <h3>Web Class</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="btn btn-sm btn-primary">
                  Demo <i class="bi bi-arrow-right-short"></i>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={project1}
                alt=""
                className={`d-block ${imageClicked ? "blur" : ""}`}
                onClick={() => setImageClicked(!imageClicked)}
              />
              <Carousel.Caption
                className={`hide-text ${
                  imageClicked ? "show-text" : "hide-text"
                }`}
              >
                <h3>Web Class</h3>
                <p>Lorem ipsum dolor sit amet</p>
                <button className="btn btn-sm btn-primary">
                  Demo <i class="bi bi-arrow-right-short"></i>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={project1}
                alt=""
                className={`d-block ${imageClicked ? "blur" : ""}`}
                onClick={() => setImageClicked(!imageClicked)}
              />
              <Carousel.Caption
                className={`hide-text ${
                  imageClicked ? "show-text" : "hide-text"
                }`}
              >
                <h3>Web Class</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className="btn btn-sm btn-primary">
                  Demo <i class="bi bi-arrow-right-short"></i>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Project;
