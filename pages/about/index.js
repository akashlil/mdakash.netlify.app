const About = () => {
  const imgPro = "https://i.ibb.co/Gsqv4D7/Untitled-design-1.png";

  return (
    <div className="container">
      <div
        className="row g-0 text-center justify-content-cente align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="col-md-8 col-12 pe-5">
          <div className=" " data-aos="fade-right">
            <div className="">
              <h1>Akash</h1>
              <p>Founder and CEO, 10 Minute School</p>
              <p>
                Ayman Sadiq is the founder & CEO of 10 Minute School. This is
                the largest online education platform in Bangladesh which
                teaches more than 250,000 students every single day, that too
                completely free of cost. 10 Minute School has won many global
                accolades and a few to be mentioned would be The GLOMO Award in
                World Mobile Congress & The APICTA Award which is also known as
                the Oscars of ICT. Ayman received The Queen’s Leader Award 2018
                for creating access to quality education for millions of
                students in Bangladesh. He is also a One Young World ambassador
                & he recently got enlisted in the prestigious Forbe’s 30 Under
                30 list.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 ">
          <div className="rounded-5 shadow-lg  p-4">
            <img src={imgPro} className="img-fluid rounded-5 " alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
