import { aboutList } from "./AboutList.jsx"

export function About () {
    const listItems = aboutList.map((about,index) =>
        <li key={index}>
            <h6>{about.title}</h6>
            <p>{about.content}</p>
        </li>
    );
    return <ul>{listItems}</ul>
}