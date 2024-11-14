import { BrowserRouter, Routes, Route } from "react-router-dom";

import Films from "../pages/films";
import Games from "../pages/games";
import Characters from "../pages/characters";
import User from "../pages/user";
import TvShows from "../pages/tvshows";
export default function AdamsRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <p>
            Welcome to Pop Culture Corner, the one stop shop for all this pop
            culture, why not take a look below at our review feed.
          </p>
        }
      />
      <Route path="/games" element={<Games />} />
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/films" element={<Films />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
