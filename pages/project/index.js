import projectStyle from "./project.module.css";
import LoadData from "@components/LoadData/LoadData";
import swrFetchData from "hook/swrFetchData";
import Head from "next/head";
import Meta from "@components/Meta";
const Project = ({ projects }) => {
  // const projects = swrFetchData("/api/projects");

  return (
    <>
      <Meta title="Akash" desp="kjssjb" keywords="protfilo" />

      <div>
        <div className="container">
          <h1 className="text-center m-5">My Project</h1>
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 text-dark">
            {projects == null ? <LoadData /> : ""}
            {projects?.map((project) => (
              <div className="col" key={project._id}>
                <div className="card h-100">
                  <img
                    src={`${project?.imagelink}`}
                    className="card-img-top h-100 w-100"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {project?.title?.slice(0, 26)}
                    </h5>
                    <a
                      className={["card-text", projectStyle.couser].join(" ")}
                      href={project.livelink}
                      target="_blanck"
                    >
                      live Link : {project?.livelink?.slice(0, 50)}....
                    </a>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted text-end">
                      Rating{"  "}
                      <span className="text-danger"> 4/5</span>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

export async function getServerSideProps(req, res) {
  const respones = await fetch("https://mdakash.netlify.app/api/projects");
  const projects = await respones.json();
  return {
    props: {
      projects,
    },
  };
}
