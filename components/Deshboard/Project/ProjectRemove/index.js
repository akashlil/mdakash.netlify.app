import { useEffect, useState } from "react";

const ProjectRemove = () => {
  const [projectsall, setProjectall] = useState([]);

  const count = 1;

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectall(data);
      });
  }, [projectsall]);

  const projectDelete = (id) => {
    try {
      fetch(`/api/projects/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const updateTable = projectsall.filter(
            (projects) => projects._id !== id
          );
          setProjectall(updateTable);
        });
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <div className="mt-2">
      <div className="table-responsive bg-white rounded shodow">
        <table
          id="book_details"
          className="table table-dark table-striped display"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Live Link</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {projectsall?.map((project) => {
              return (
                <tr key={project._id}>
                  <th scope="row">{count++}</th>
                  <td> {project?.title?.slice(0, 20)}</td>
                  <td>{project?.livelink?.slice(0, 50)}</td>
                  <td>
                    <button
                      className="btn-sm btn btn-danger"
                      onClick={() => projectDelete(project?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectRemove;
