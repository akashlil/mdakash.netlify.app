import Script from "next/script";
import { useEffect, useState } from "react";

const ProjectRemove = () => {
  /* dataTable */
  $(document).ready(function () {
    $("#book_details").DataTable({
      bSort: true,
      width: "100%",
      destroy: true,
      columnDefs: [{}],
    });
  });
  /* dataTable end */

  const count = 1;
  const [projectsall, setProjectall] = useState([]);
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectall(data);
      });
  }, []);
  return (
    <div className="mt-2">
      <Script
        src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"
        defer
      ></Script>
      <div className="table-responsive bg-white rounded shodow">
        <table id="book_details" class="table table-dark table-striped display">
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
                    <button className="btn-sm btn btn-danger">Delete</button>
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
