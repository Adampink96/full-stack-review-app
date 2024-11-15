import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/nav";
import AdamsRoutes from "../components/routes";
import Tvshows from "../pages/tvshows";
import Films from "../pages/films";
import Games from "../pages/games";
import User from "../pages/user";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const response = await fetch("http://localhost:8080/reviews");
      const data = await response.json();
      setReviews(data);
      console.log(data);
    }
    getReviews();
  }, []);

  // useEffect(()=> {
  //   async function getGames(){
  //     const respsone = await fetch("ttp://www.gamespot.com/api/games/?api_key=c2dbae712c6a3b09e9315a018da6322f5de41057");
  //     const data = await response.json();
  //     setGames
  //   }
  // })

  return (
    <div>
      <img className="logo" src="./finallogo.png" alt="logo" />

      <Nav />

      <AdamsRoutes />
      <h2>user reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <h3>{review.username}</h3>
              <p>
                {review.title} - {review.type}
              </p>
              <p>
                {review.review} - {review.rating}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
}
