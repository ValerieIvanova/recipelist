export default function RecipeItemList() {
  return (
    <>
      <div className="blog-box row">
        <div className="col-md-4">
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
        </div>

        <div className="blog-meta big-meta col-md-8">
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <h4>
            <a href="food-single.html" title="">
              Banana-chip chocolate cake recipe
            </a>
          </h4>
          <p>
            Aenean interdum arcu blandit, vehicula magna non, placerat elit.
            Mauris et pharetratortor. Suspendissea sodales urna. In at augue
            elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.
          </p>
          <small>
            <a href="blog-category-01.html" title="">
              Food
            </a>
          </small>
          <small>
            <a href="food-single.html" title="">
              11 July, 2017
            </a>
          </small>
          <small>
            <a href="blog-author.html" title="">
              by Matilda
            </a>
          </small>
        </div>
      </div>
      <hr className="invis" />
    </>
  );
}
