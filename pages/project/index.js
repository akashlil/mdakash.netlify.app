import projectStyle from "./project.module.css";
import { useEffect, useState } from "react";
import LoadData from "@components/LoadData/LoadData";

const Project = () => {
  const [projects, setProject] = useState(null);

  // useEffect(() => {
  //   fetch("/api/projects")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProject(data);
  //     });
  // }, []);

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
                  src={project.imageslink}
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {project.title.slice(0, 20)}
                  </h5>
                  <a
                    className={["card-text", projectStyle.couser].join(" ")}
                    href={project.livelink}
                    target="_blanck"
                  >
                    live Link : {project.livelink.slice(0, 50)}....
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
