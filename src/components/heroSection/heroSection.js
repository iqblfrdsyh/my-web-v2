import './heroSection.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
const HeroSection = () => {
    const logo = 'assets/profile/iqbal.jpg'

    const name = useRef(null)
    useEffect(() => {
        const typed = new Typed(name.current, {
            strings: ["I'm M Iqbal F", "I'm 17 Y'o"],
            startDelay: 500,
            typeSpeed: 200,
            backDelay: 200,
            backSpeed: 150,
            smartBackspace: false,
            showCursor: false,
            loop: false,
        })
    })
    return (
        <div class="jumbotron">
            <div class="container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
                data-aos-offset="0">
                <div class="row">
                    <div class="col-md-4">
                        <h1 class="display-4 fs-1">Hello, <span ref={name}></span></h1>
                        <h4 class="fw-bold fs-4 mt-3">Front End Developer</h4>
                        <p class="mt-4">
                            Hi my name is M Iqbal Ferdiansyah I'm still in 11th grade.
                        </p>
                        <a href="https://wa.me/6288971755075?"><button type="button" class="btn mt-3">
                            Contact Me <i class="uil uil-message"></i></button></a>
                    </div>
                    <div class="col-md-4 offset-1">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <ul class="justify-content-center fw-bold">
                            <li>
                                <a href="https://wa.me/6288971755075?"><i class="bi bi-whatsapp text-success"></i></a>
                            </li>
                            <li>
                                <a href="https://www.github.com/iqblfrdsyh"><i class="bi bi-github text-dark"></i></a>
                            </li>
                            <li>
                                <a href="https://instagram.com/iqblfrdsyh?utm_medium=copy_link"><i
                                    class="bi bi-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection