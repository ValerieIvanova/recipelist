import RecipeItemList from "./RecipeItemList";

export default function AllRecipes() {
  return (
    <>
      <section className="section lb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="blog-list clearfix">
                  <RecipeItemList />
                  <RecipeItemList />
                </div>
              </div>

              <hr className="invis" />

              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="widget">
                  <h2 className="widget-title">Search</h2>
                  <form className="search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search on the site"
                    />
                  </form>
                </div>

                <div className="widget">
                  <h2 className="widget-title">Recent Posts</h2>
                  <div className="blog-list-widget">
                    <div className="list-group">
                      <a
                        href="single.html"
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="w-100 justify-content-between">
                          <img
                            src="upload/blog_square_14.jpg"
                            alt=""
                            className="img-fluid float-left"
                          />
                          <h5 className="mb-1">
                            5 Beautiful buildings you need to before dying
                          </h5>
                          <small>12 Jan, 2016</small>
                        </div>
                      </a>

                      <a
                        href="single.html"
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="w-100 justify-content-between">
                          <img
                            src="upload/blog_square_12.jpg"
                            alt=""
                            className="img-fluid float-left"
                          />
                          <h5 className="mb-1">
                            Let's make an introduction for creative life
                          </h5>
                          <small>11 Jan, 2016</small>
                        </div>
                      </a>

                      <a
                        href="single.html"
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="w-100 last-item justify-content-between">
                          <img
                            src="upload/blog_square_11.jpg"
                            alt=""
                            className="img-fluid float-left"
                          />
                          <h5 className="mb-1">
                            Did you see the most beautiful sea in the world?
                          </h5>
                          <small>07 Jan, 2016</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h2 className="widget-title">Instagram Feed</h2>
                  <div className="instagram-wrapper clearfix">
                    <a href="#">
                      <img
                        src="upload/blog_square_05.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_06.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_07.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_13.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_08.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_09.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_10.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_11.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="upload/blog_square_12.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div className="widget">
                  <h2 className="widget-title">Popular Categories</h2>
                  <div className="link-widget">
                    <ul>
                      <li>
                        <a href="#">
                          Fahsion <span>(21)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Lifestyle <span>(15)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Art & Design <span>(31)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Health Beauty <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Clothing <span>(66)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Entertaintment <span>(11)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Food & Drink <span>(87)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
