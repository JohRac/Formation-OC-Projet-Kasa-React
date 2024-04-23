import { Footer, Header } from "./Banner.jsx";
import { aboutList } from "./AboutList.jsx"

export default function aboutListing() {
    const listItems = aboutList.map(about =>
        <li>
            <h6>{about.title}</h6>
            <p>{about.content}</p>
        </li>
    );
    return <ul>{listItems}</ul>
}

export function About () {
    return <>
        <div>
            <header>
                <Header/>
            </header>
            <div>
                <aboutListing/>
            </div>    
            <footer>
                <Footer/>
            </footer>
        </div>
    </>
}