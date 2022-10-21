import '../styles/Header.css'
import {Nav} from "./Nav";

export function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">Logo</div>
                    <Nav />
               </div>

            </div>
        </div>
    )

}
