export const Home = () => {
    return (
        <>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">
                        Trip Assistance
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="#">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Page Header*/}
            <header
                className="masthead"
                style={{
                    backgroundImage: 'url("assets/img/home_section_1.jpg")',
                    height: "100%"
                }}
            >
                <div className="container position-relative">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Search City</h1>
                            </div>
                            <div className="input-group mt-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type city name"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <span style={{ fontSize: "1.5rem" }}>23°C</span>
                                            <br />
                                            <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                                                2023-02-05
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-10 col-xl-8 mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <small
                                                        className="text-muted"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        USD
                                                    </small>
                                                    <br />
                                                    <span style={{ fontSize: "1.5rem" }}>55.56</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <small
                                                        className="text-muted"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        EUR
                                                    </small>
                                                    <br />
                                                    <span style={{ fontSize: "1.5rem" }}>70.82</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <small
                                                        className="text-muted"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        CAD
                                                    </small>
                                                    <br />
                                                    <span style={{ fontSize: "1.5rem" }}>64.02</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card" style={{ borderRadius: "0.5rem" }}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <small
                                                        className="text-muted"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        Total Poulation
                                                    </small>
                                                    <br />
                                                    <span style={{ fontSize: "1.5rem" }}>23 000 000</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <small
                                                        className="text-muted"
                                                        style={{ fontSize: "0.9rem" }}
                                                    >
                                                        GDP Per Capita
                                                    </small>
                                                    <br />
                                                    <span style={{ fontSize: "1.5rem" }}>23%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}