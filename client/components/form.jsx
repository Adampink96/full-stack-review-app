import { useState } from "react";
export default function Form({ typeid }) {
  const [form, setForm] = useState({
    username: "",
    title: "",
    rating: "",
    review: "",
  });
  async function handleSubmit(event) {
    event.preventdefault();
    setForm({ username: "", title: "", rating: "", review: "", type: "" });
    await fetch("http://localhost:8080/reviews", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify,
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          placeholder="username"
          type="text"
          value={form.username}
        />

        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={form.title}
        />

        <input value={typeid} name="type" type="hidden" />

        <input
          onChange={handleChange}
          name="rating"
          placeholder="Rating"
          type="number"
          value={form.rating}
        />

        <input
          onChange={handleChange}
          name="review"
          placeholder="Review"
          type="text"
          value={form.review}
        />
        {/* <select>
          <option value="2">Films</option>
        </select> */}
        <button>submit</button>
      </form>
    </div>
  );
}
