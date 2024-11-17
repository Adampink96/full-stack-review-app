import { useState } from "react";
import Form from "../components/form";

export default function TvShows() {
  return (
    <div>
      <h2>Welcome to the tv shows page</h2>
      <p>leave a review below to be included on the home page</p>
      <Form typeid="1" />
    </div>
  );
}
