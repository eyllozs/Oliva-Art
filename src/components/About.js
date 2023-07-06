import React from "react";
import about from "../images/about.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={about} width="600px%" height="400" alt="" />
        </div>
        <div className="about-txt">
          <div className="service-btn">
            <Link to="/services">Click to see our services</Link>
          </div>
          <h3>About Us</h3>
          <p>
            <br /> <br />
            As Oliva Art team, we invite you to the magical world of digital
            art. We aim to push the boundaries of art and allow creativity to
            flow freely. <br /> <br />
            Our mission is to use the power of digital images to create a
            platform to make art accessible to everyone and to inspire people.
            We believe that art is a powerful tool to express emotions, provoke
            thoughts and bring people together. <br /> <br />
            Our vision is to create innovation and inspiring experiences in the
            digital art world. We are working to bring art lovers to the magical
            universe of digital paintings and to bring new perspectives. As we
            shape the future of art, we combine technology and creativity.
            <br /> <br />
            Our team consists of passionate and talented individuals
            specializing in art, design and technology. We work together to make
            art more engaging, accessible and inspiring. Each of us believes in
            the power of art and we aim to touch the hearts of art lovers.{" "}
            <br /> <br /> As Oliva Art Studio, we invite you to the exciting
            world of digital art. Here, you can browse impressive works,
            discover the stories of the artists and embark on your own creative
            journey. <br /> <br />
            Join us to push the limits of creativity. Are you ready to embark on
            an artistic journey?
          </p>
        </div>
      </div>
    </>
  );
}
