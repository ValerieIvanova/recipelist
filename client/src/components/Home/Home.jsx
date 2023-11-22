import RecipeItemGrid from "./RecipeItemGrid";

export default function Home() {
    return (
        <section className="section lb text-muted">
        <div className="container">
        <div className="row grid-style">
            <RecipeItemGrid />
            <RecipeItemGrid />
            <RecipeItemGrid />
            <RecipeItemGrid />
        </div>

        <hr className="invis"></hr>

        <div className="row grid-style">
            <RecipeItemGrid />
            <RecipeItemGrid />
            <RecipeItemGrid />
            <RecipeItemGrid />
        </div>

        <hr className="invis"></hr>

        </div>
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

      </div>

      </section>
    )
}