import projectStyle from "./project.module.css";
import LoadData from "@components/LoadData/LoadData";
import swrFetchData from "hook/swrFetchData";

const Project = ({ projects }) => {
  // const projects = swrFetchData("/api/projects");

  return (
    <div>
      <div className="container">
        <h1 className="text-center m-5">My Project</h1>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 text-dark">
          {projects == null ? <LoadData /> : ""}
          {projects?.map((project) => (
            <div className="col" key={project._id}>
              <div className="card h-100">
                <img
                  src={project?.imageslink}
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {project?.title?.slice(0, 20)}
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
