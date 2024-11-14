import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav-container">
      <Link to={"/"}>Home</Link>
      &nbsp;
      <Link to={"/tvshows"}>tvshows</Link> &nbsp;
      <Link to={"/films"}>Films</Link> &nbsp;
      <Link to={"/games"}>Games</Link> &nbsp;
      <Link to={"/characters"}>Characters</Link> &nbsp;
      <Link to={"/user"}>user</Link>
    </div>
  );
}
