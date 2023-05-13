import "./header.css";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <nav>
      <h1>TechStar.</h1>
      <main>
        <HashLink className="headerTags" to= {"/#home"}>Home</HashLink>
        <HashLink className="headerTags" to= {"/contact"}>Contact</HashLink>
        <HashLink className="headerTags" to= {"/#about"}>About</HashLink>
        <HashLink className="headerTags" to= {"/#brands"}>Brands</HashLink>
        <HashLink className="headerTags" to= {"/services"}>Services</HashLink>
      </main>
    </nav>
  );
}
