import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import './AboutMe.css'

const AboutMe = () => {
    const profile2 = 'assets/profile/iqbal2.jpeg'

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section class="about">
            <div class="container pt-4" id="about">
                <h3 class="title text-center fw-bold">About <span style={{ color: "slateblue" }}>Me</span></h3>
                <p class="info-title text-center" style={{ opacity: "0.5" }}>My introduction</p>
                <div class="row justify-content-center content">
                    <div class="col-md-5" data-aos="fade-right" data-aos-delay="50">
                        <img class="w-75" src={profile2} alt="" />
                    </div>
                    <div class="col-md-5 offset-1">
                        <p>
                            Hi my name is M Iqbal Ferdiansyah I just learned coding in
                            Front End, my achievement is to become Full Stack Developer.
                        </p>
                        <div class="project d-flex justify-content-between mt-5 text-center">
                            <div class="point">
                                <span>01</span>
                                <p>year <br />experience</p>
                            </div>
                            <div class="point">
                                <span>00</span>
                                <p>Completed <br />project</p>
                            </div>
                            <div class="point">
                                <span>00</span>
                                <p>companies <br />worked</p>
                            </div>
                        </div>
                        <Button variant="primary" onClick={handleShow} className="p-3 mt-4 ">
                            Download CV <i class="bi bi-download"></i>
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Announcement!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Sorry CV Not Available
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Download</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe