export default function Contact() {
  return (
    <div>
      <div className="contact-form-container d-flex justify-content-center align-items-center vh-50 mt-5">
        <div className="col-10 col-md-6 col-lg-6">
          <h1 className="form-title text-center mb-4">
            Your contact information
          </h1>
          <form className="login-form rounded">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputSubject" className="form-label">
                Subject
              </label>
              <input
                type="subject"
                className="form-control"
                id="exampleInputSubject"
              ></input>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="form4Example3">
                Message
              </label>
              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn w-50 rounded-pill submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
