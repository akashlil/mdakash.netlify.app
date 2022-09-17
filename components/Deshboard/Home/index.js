const HomeDash = () => {
  return (
    <div className="row row-cols-md-2 row-cols-1 g-4">
      <div className="col">
        <div class="card text-bg-danger mb-3">
          <div class="card-header">Project</div>
          <div class="card-body">
            <h5 class="card-title">Totall Project</h5>
            <p class="card-text">7</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div class="card text-bg-warning mb-3">
          <div class="card-header">View Website</div>
          <div class="card-body">
            <h5 class="card-title">View Count</h5>
            <p class="card-text">50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
