import {Header} from "../Header";
import {Footer} from "../Footer";

export function Layout(props: any) {

    return (
        <div>
            <Header />
            <main className={props.class}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
