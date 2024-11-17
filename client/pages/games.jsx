import { useState } from "react";
import Form from "../components/form";

export default function Games() {
  return (
    <div>
      <h2>welcome to the video games page!</h2>
      <p>
        leave a review below of your favorite game to be included in our home
        page
      </p>
      <Form typeid="3" />
    </div>
  );
}
