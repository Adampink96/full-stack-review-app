import { useState } from "react";

export default function User() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

  function handleChange(e) {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "confirm") {
      if (form.password !== e.target.value) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          placeholder="Username"
          type="text"
          value={form.username}
        />

        <input
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
        />

        <input
          onChange={handleChange}
          name="confirm"
          placeholder="Confirm"
          type="password"
          value={form.confirm}
        />
        {error && <p>Password must match</p>}
        <button>create user</button>
      </form>
    </div>
  );
}
