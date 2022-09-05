import { useState } from "react";

const ProjectAdd = () => {
  const [projectDataLoaded, setProjectDataLoaded] = useState(false);
  const [meassges, setMassage] = useState(false);

  setTimeout(() => {
    setMassage(false);
  }, 3000);

  const projectSubmit = (event) => {
    event.preventDefault();
    setProjectDataLoaded(true);
    const data = {
      title: event.target.title.value,
      imagelink: event.target.imagelink.value,
      livelink: event.target.livelink.value,
    };
    if (!data.title || !data.imagelink || !data.livelink) {
      setMassage(true);
      setProjectDataLoaded(false);
      return false;
    }
    setMassage(false);
    try {
      fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setProjectDataLoaded(false);
          event.target.reset();
        });
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <div className="mt-5">
      <div className="col-md-9 mx-auto">
        <div className="shadow-lg text-dark text-white rounded  bg-dark">
          <div className="p-5">
            <h3 className="mb-3" style={{ color: "#3e34b5" }}>
              Project Add
            </h3>
            {meassges ? (
              <div class="alert alert-danger" role="alert">
                All Flited is Required
              </div>
            ) : (
              ""
            )}
            <form
              method="post"
              className="needs-validation"
              onSubmit={projectSubmit}
            >
              <div className="mb-3 ">
                <label htmlFor="title" className="form-label">
                  title
                </label>
                <input
                  type="text"
                  required
                  className="form-control p-2"
                  id="title"
                  name="title"
                  placeholder="title"
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Image Link
                </label>
                <input
                  type="text"
                  required
                  className="form-control p-2"
                  id="imagelink"
                  name="imagelink"
                  placeholder="Image Link"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Live Link
                </label>
                <input
                  type="text"
                  required
                  className="form-control p-2"
                  id="livelink"
                  name="livelink"
                  placeholder="Live Link"
                />
              </div>
              {!projectDataLoaded ? (
                <button
                  type="submit"
                  className="btn next col-12 btn-primary py-3 rounded-3 "
                >
                  Uploaded
                </button>
              ) : (
                <div>
                  <button
                    className="btn next col-12 btn-primary py-3 rounded-3"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
