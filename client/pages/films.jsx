import { useState } from "react";
import Form from "../components/form";

export default function Films() {
  return (
    <div>
      <h2>welcome to the films</h2>
      <p>fill out the form below to have your review added to the home page</p>
      <Form typeid="2" />
    </div>
  );
}
