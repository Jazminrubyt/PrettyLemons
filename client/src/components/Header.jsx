import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1>Pretty Lemons</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                        <li className="nav-item ms-auto ">
                                <Link className="nav-link" to="/"> Home </Link>
                            </li>
                            <li className="nav-item ms-auto ">
                                <Link className="nav-link" to="/view"> All Lemonades </Link>
                            </li>
                            <li className="nav-item ms-auto">
                                <Link className="nav-link" to="/create"> Create Lemonade </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;