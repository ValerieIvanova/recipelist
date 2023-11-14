export default function RecipeItem(){
    return(
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
        </div>
      </div>
    )
}