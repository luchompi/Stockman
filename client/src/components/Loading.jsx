const Loading = () => {
  return (
    <div>
      <article className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <h5 className="card-title text-center">Cargando...</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Loading;
