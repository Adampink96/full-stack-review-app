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

//   const [form, setForm] = useState({
//     username: "",
//     title: "",
//     rating: "",
//     review: "",
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     setForm({ username: "", title: "", rating: "", review: "" });
//   }
//   function handleChange(event) {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   }

//   return (
//     <div>
//       <h2>all the cool horror games</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           onChange={handleChange}
//           name="username"
//           placeholder="username"
//           type="text"
//           value={form.username}
//         />
//         <label>Search Title</label>
//         <input
//           onChange={handleChange}
//           name="title"
//           placeholder="search a title"
//           type="text"
//           value={form.title}
//         />
//         <label>rating</label>
//         <input
//           onChange={handleChange}
//           name="rating"
//           placeholder="Rating"
//           type="number"
//           value={form.rating}
//         />
//         <label>review</label>
//         <input
//           onChange={handleChange}
//           name="review"
//           placeholder="review"
//           type="text"
//         />
//         <select>
//           <option value="1">Games</option>
//         </select>
//         <button>submit</button>
//       </form>
//       <ol>
//         <li>silent hill 2</li>
//         <li>resident evil 4</li>
//         <li>the last of us </li>
//         <li>amneisa</li>
//       </ol>
//       <p>Username: {form.username}</p>
//       <p>Title: {form.title}</p>
//       <p>Rating: {form.rating}</p>
//       <p>review:{form.review}</p>
//     </div>
//   );
// }
