import "./contacts.css";

export default function Contacts() {
    return (
        <>
            <div className="page-title wb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2>
                                <i className="fa fa-envelope-open-o bg-red" />{" "}
                                Contact Us{" "}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section wb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4>Who are we</h4>
                                        <p>
                                            Recipelist, is where a community of
                                            culinary enthusiasts come together
                                            to celebrate the art of home
                                            cooking. At Recipelist, we believe
                                            that everyone has a unique flavor to
                                            share. Whether you're a seasoned
                                            chef or an aspiring home cook, our
                                            platform welcomes you to explore,
                                            share, and connect with a community
                                            passionate about delicious
                                            experiences. Join us in building a
                                            diverse collection of recipes, where
                                            your voice is not just heard but
                                            savored.
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h4>Press/Media Hub:</h4>
                                        <p>
                                            Explore the latest news, press
                                            releases, and media coverage
                                            featuring our company's journey,
                                            innovations, and insights. Dive into
                                            our collection of articles, press
                                            kits, and multimedia resources,
                                            offering a comprehensive view of our
                                            initiatives and achievements. Stay
                                            updated with the latest happenings,
                                            announcements, and industry
                                            insights. For media
                                            inquiries, interview requests, or
                                            further information, please reach
                                            out to our press relations team.
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
                                            </div>
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h4>Contact Information</h4>
                                        <p>
                                            <h6>Addres:</h6>
                                            <pdiv>RECIPELIST</pdiv>
                                            <div>123 Main Street</div>
                                            <div>Suite 101</div>
                                            <div>Anytown, USA</div>
                                            <hr className="invis" />
                                            <h6>Phone:</h6>
                                            <div>(123) 456-7890</div>
                                            <hr className="invis" />
                                            <h6>Email:</h6>
                                            <div>recipelist@example.com</div>
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
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Send
                                                <i className="fa fa-envelope-open-o" />
                                            </button>
                                        </form>
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
