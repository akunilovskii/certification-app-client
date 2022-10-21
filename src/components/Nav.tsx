import '../styles/Nav.css'

export function Nav() {

    return (
        <nav className="nav">
            <a className="nav__link active" href="/">About</a>  {/*  Active  */}
            <a className="nav__link" href="/">Contact</a>
            <a className="nav__link" href="/"><i className="fa-solid fa-cart-shopping"></i></a>
            <a className="nav__link" href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
        </nav>
    )

}
