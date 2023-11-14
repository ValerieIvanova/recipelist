import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="widget">
                  <div className="footer-text text-center">
                    <a href="food-index.html">
                      <img
                        src="images/version/food-logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <p>
                      © 2017 RecipeList Pty Ltd. Trademarks and brands are the
                      property
                      <br />
                      of their respective owners.{" "}
                    </p>
                    <div className="social">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Google Plus"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Pinterest"
                      >
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <div className="copyright">
                  &copy; RecipeList. Design:{" "}
                  <a href="http://html.design">HTML Design</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}