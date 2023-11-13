import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div id="wrapper">
      <IntroSection />

      <Header />

      <Routes>{/* <Route path="/" element={<IntroSection />} /> */}</Routes>

      <section className="section lb text-muted">
        <div className="container">
          <div className="row grid-style">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <span className="detail veg">Veg</span>
                    <img
                      src="upload/blog_square_10.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Eggplant meat broth
                    </a>
                  </h4>
                  <p>
                    Aenean interdum arcu blandit, vehicula magna non, placerat
                    et pharetratortor.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      18 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_12.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Vegetable rice recipe
                    </a>
                  </h4>
                  <p>
                    Vhicula magna non, placerat elit. Mauris et pharetratortor
                    sodales urna.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      16 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <span className="detail nonveg">Non-Veg</span>
                    <img
                      src="upload/blog_square_13.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Egg bread
                    </a>
                  </h4>
                  <p>
                    Aenean suspendissea sodales urna. In at augue elit. Vivamus
                    enim nibh ac felis.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      15 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_05.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Plenty of creamy sweet
                    </a>
                  </h4>
                  <p>
                    Aenean interdum arcu magna non, placerat elit. Mauris et
                    pharetratortor.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      14 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          <hr className="invis" />

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="banner-spot clearfix">
                <div className="banner-img">
                  <img
                    src="upload/banner_06.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                {/* <!-- end banner-img --> */}
              </div>
              {/* <!-- end banner --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          <hr className="invis3" />

          <div className="row grid-style">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_17.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Eggplant meat broth
                    </a>
                  </h4>
                  <p>
                    Aenean interdum arcu blandit, vehicula magna non, placerat
                    et pharetratortor.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      18 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <span className="detail veg">Veg</span>
                    <img
                      src="upload/blog_square_16.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Strawberry ice cream
                    </a>
                  </h4>
                  <p>
                    Suspendissea sodales urna. In at augue elit. Vivamu ac felis
                    tempor odio.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      17 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <span className="detail veg">Veg</span>
                    <img
                      src="upload/blog_square_15.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      French fried breakfast
                    </a>
                  </h4>
                  <p>
                    Vhicula magna non, placerat elit. Mauris et pharetratortor
                    sodales urna.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      16 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <span className="detail nonveg">Non-Veg</span>
                    <img
                      src="upload/blog_square_14.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Fried steak with sauce
                    </a>
                  </h4>
                  <p>
                    Aenean suspendissea sodales urna. In at augue elit. Vivamus
                    enim nibh ac felis.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      15 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          <hr className="invis3" />

          <div className="row grid-style">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_05.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Plenty of creamy sweet
                    </a>
                  </h4>
                  <p>
                    Aenean interdum arcu magna non, placerat elit. Mauris et
                    pharetratortor.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      14 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_09.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Banana chocolate cake
                    </a>
                  </h4>
                  <p>
                    Suspendissea urna augue elit. Vivamus enim nibh, maximus ac
                    felis tempor odio.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      13 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_06.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Apple cake recipe
                    </a>
                  </h4>
                  <p>
                    Vhicula mag, placerat elit. Mauris et pharetratortor.
                    Suspendissea sodales urna.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      12 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="blog-box">
                <div className="post-media">
                  <a href="food-single.html" title="">
                    <img
                      src="upload/blog_square_07.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="hovereffect"></div>
                  </a>
                </div>
                {/* <!-- end media --> */}

                <div className="blog-meta big-meta">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h4>
                    <a href="food-single.html" title="">
                      Garlic sweet recipe
                    </a>
                  </h4>
                  <p>
                    Aenean suspendissea sodales urna. In at augue elit. Vivamus
                    enim nibh, maximus ac felis.
                  </p>
                  <small>
                    <a href="food-single.html" title="">
                      11 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="#" title="">
                      by Matilda
                    </a>
                  </small>
                </div>
                {/* <!-- end meta --> */}
              </div>
              {/* <!-- end blog-box --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          <hr className="invis" />

          <div className="row">
            <div className="col-md-12 text-center">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
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
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end album --> */}

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
