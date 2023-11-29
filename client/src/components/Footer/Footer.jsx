import "./Footer.css";

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
                                        src="/images/version/food-logo.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <p>
                                    Whip, Mix and
                                    Savor!
                                    All recipes are culinary adventures waiting
                                    to be explored. Join our flavorful journey
                                    and unleash your inner chef!
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
                            &copy; 2023 RecipeList Pty Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
