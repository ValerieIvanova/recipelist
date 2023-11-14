import styles from "./ContactMe.css";

export default function ContactMe() {
  return (
    <>
      <div className="page-title wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2>
                <i className="fa fa-envelope-open-o bg-red" /> Contact me{" "}
              </h2>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end page-title */}
      <section className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="page-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <h4>Who am I</h4>
                    <p>
                      RecipeList is a personal blog for handcrafted, cameramade
                      photography content, fashion styles from independent
                      creatives around the world.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h4>How can I help?</h4>
                    <p>
                      Etiam vulputate urna id libero auctor maximus. Nulla
                      dignissim ligula diam, in sollicitudin ligula congue quis
                      turpis dui urna nibhs.{" "}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h4>Pre-Sale Question</h4>
                    <p>
                      Fusce dapibus nunc quis quam tempor vestibulum sit amet
                      consequat enim. Pellentesque blandit hendrerit placerat.
                      Integertis non.
                    </p>
                  </div>
                </div>
                <hr className="invis" />
                <div className="row">
                  <div className="col-lg-7">
                    <form className="form-wrapper">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                      <textarea
                        className="form-control"
                        placeholder="Your message"
                        defaultValue={""}
                      />
                      <button type="submit" className="btn btn-primary">
                        Send <i className="fa fa-envelope-open-o" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* end page-wrapper */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </>
  );
}
