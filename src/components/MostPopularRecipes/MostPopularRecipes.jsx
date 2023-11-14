import Rows from "./Rows";

export default function MostPopularRecipes() {
    return (
        <section className="section lb text-muted">
        <div className="container">
            <Rows />
            <Rows />
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