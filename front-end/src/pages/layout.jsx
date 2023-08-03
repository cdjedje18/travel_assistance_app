import { Outlet } from "react-router-dom"

export const Layout = () => {

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

            <header
                className="masthead"
                style={{
                    backgroundImage: 'url("assets/img/home_section_1.jpg")',
                    height: "100%"
                }}
            >
                <Outlet />
            </header>
        </>
    )
}