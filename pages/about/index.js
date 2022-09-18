import hederColor from "./about.module.css";
const About = () => {
  const imgPro = "https://i.ibb.co/Gsqv4D7/Untitled-design-1.png";

  return (
    <>
      <div className="container">
        <div
          className="row g-0 text-center justify-content-cente"
          style={{ minHeight: "60vh" }}
        >
          <div className="col-md-8 col-12 pe-md-5 order-lg-0 order-2">
            <div className=" " data-aos="fade-right">
              <div className="">
                <h1>Md Akash</h1>
                <p className="text-uppercase fs-5"> MEAN stack developer</p>
                <p className="lh-md text-capitalize">
                  Developer with over 3 years experience. I'm a young,
                  passionate developer with a true passion for writing code.
                  Looking for a challenging career opportunity in software
                  development position in a well-established organization to
                  improve my knowledge, skills and utilize my previous work
                  experience.
                </p>
                <hr />
                <ul className="fw-semibold lh-lg">
                  <span className="fs-4"> My skill</span>
                  <li>Programming - JavaScript, PHP, C</li>
                  <li>Library - React.js, Next.js, Node.js,</li>
                  <li>Framework - Express.js, Material-UI, Bootstrap,</li>
                  <li>Databases - NoSQL, MySQL</li>
                  <li>Tools - Figma, Canva, etc....</li>
                </ul>
                <hr />
                <ul className="fw-semibold lh-lg">
                  <span className="fs-4"> Courses Complete</span>

                  <li>
                    Complete Web Development Course with{" "}
                    <a href="https://www.programming-hero.com/">
                      Programming Hero
                    </a>{" "}
                  </li>

                  <li>
                    Express JS REST API Development{" "}
                    <a href="https://express.rabbil.com/">Rabbil Hasan </a>
                  </li>
                  <li>
                    (PHP and Laravel){" "}
                    <a href="https://www.creativeitinstitute.com/">
                      {" "}
                      Creative IT Institute Dhaka
                    </a>
                  </li>
                </ul>
                <hr />
                <ul>
                  <span className="fs-4">Education Qualification</span>
                  <li>Diploma(CSE) : Faridpur Polytechnic Institute</li>
                  <li className="mb-5">
                    B.Sc. in Computer Science & Engineering :{" "}
                    <span>Green University of Bangladesh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 order-lg-0 order-1 p-lg-0 mb-5 mb-lg-0">
            <div className="rounded-5 shadow-lg p-3">
              <img src={imgPro} className="img-fluid rounded-5" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
