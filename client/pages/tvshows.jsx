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

//   const [form, setForm] = useState({
//     username: "",
//     title: "",
//     rating: "",
//     review: "",
//   });

//   function handleSubmit(event) {
//     event.preventdefault();
//     console.log(form);
//     setForm({ username: "", title: "", rating: "", review: "" });
//   }

//   function handleChange(event) {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   }

//   return (
//     <div>
//       <h2>Tv Shows</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           onChange={handleChange}
//           value={form.username}
//           name="username"
//           placeholder="username"
//           type="text"
//         />
//         <label>Title</label>
//         <input
//           placeholder="title"
//           name="title"
//           type="text"
//           onChange={handleChange}
//           value={form.title}
//         />
//         <label>Rating</label>
//         <input
//           onChange={handleChange}
//           value={form.rating}
//           placeholder="rating"
//           name="rating"
//           type="number"
//         />
//         <label>review</label>
//         <input
//           onChange={handleChange}
//           value={form.review}
//           name="review"
//           placeholder="review"
//           type="text"
//         />
//         <select>
//           <option value="3">Tv Shows</option>
//         </select>
//         <button>submit</button>
//       </form>

//       <ol>
//         <li>Silicon Valley</li>
//         <li>Channel Zero</li>
//         <li>lord of the rings Rings Of Power</li>
//         <li>X-files</li>
//       </ol>
//       <p>username:{form.username}</p>
//       <p>title:{form.title}</p>
//       <p>rating:{form.rating}</p>
//       <p>review:{form.review}</p>
//     </div>
//   );
// }
