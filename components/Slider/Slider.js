import sildercss from "./Slider.module.css";
import Link from "next/link";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

const Slider = () => {
  const imgPro =
    "https://i.ibb.co/P6P2YbS/Untitled-design-1-removebg-preview.png";

  const reactIcon = "https://cdn.worldvectorlogo.com/logos/react-1.svg";
  const nextIcon =
    "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/UVlzv5dlRqaKaswsfUPk";

  const { text } = useTypewriter({
    words: ["React.js", "next.js", "Rest API", "PhP"],
    loop: 0,
  });

  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider-cointner">
              <div className="d-flex flex-wrap align-items-center justify-content-center mx-2">
                <div className="col-md-7">
                  <div className="mx-4">
                    {" "}
                    <h4 className={sildercss.shortTitle}>Hello, I'm</h4>
                    <h1>
                      <Typewriter
                        words={["Md Akash Munshi"]}
                        typeSpeed={200}
                        cursor
                        cursorStyle=" "
                      />
                    </h1>
                    <br />
                    <h5>
                      A{" "}
                      <span className={sildercss.shortDesp}>Web Developer</span>{" "}
                      From{" "}
                      <span className={sildercss.typewritertext}>
                        {text}
                        <Cursor cursorStyle="_" />
                      </span>
                    </h5>
                    <p className="longDesp">
                      I'm Web Developer based in BD, and I'm very passionate and
                      dedicated to my work.
                    </p>
                    <Link href="/show/all/product">
                      <a className="rounder-3">
                        <button
                          className={[sildercss.btn5, sildercss.customBtn].join(
                            " "
                          )}
                        >
                          Hire Me
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div className="m-3  position-relative">
                    <img
                      src={imgPro}
                      className="img-fluid rounded-4"
                      alt="..."
                    />
                    <img
                      src={nextIcon}
                      className={[
                        "position-absolute top-0 start-0",
                        sildercss.headerImg,
                      ].join(" ")}
                      id="banner-img"
                    ></img>
                    <img
                      src={reactIcon}
                      className={[
                        "position-absolute bottom-0 start-50",
                        sildercss.headerImg,
                      ].join(" ")}
                      id="banner-img"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev visually-hidden"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next visually-hidden"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
