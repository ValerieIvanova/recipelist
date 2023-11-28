export default function RecipeItemGrid() {
  return (
      <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div className="blog-box">
          <div className="post-media">
            <a href="recipe/:recipeId" title="">
              <img
                src="/upload/blog_square_05.jpg"
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
              <a href="/recipe1" title="">
                Plenty of creamy sweet
              </a>
            </h4>
            <p>
              Aenean interdum arcu magna non, placerat elit. Mauris et
              pharetratortor.
            </p>
            <small>
              <a href="/recipe1" title="">
                14 July, 2017
              </a>
            </small>
          </div>
        </div>
      </div>
  );
}
