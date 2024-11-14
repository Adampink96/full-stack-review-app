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

//   const [form, setForm] = useState({
//     username: "",
//     title: "",
//     rating: "",
//     review: "",
//   });
//   function handleSubmit(event) {
//     event.preventdefault();
//     setForm({ username: "", title: "", rating: "", review: "" });
//   }

//   function handleChange(event) {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   }

//   return (
//     <div>
//       <h2>all the cool films</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           onChange={handleChange}
//           name="username"
//           placeholder="username"
//           type="text"
//           value={form.username}
//         />
//         <label>Title</label>
//         <input
//           onChange={handleChange}
//           name="title"
//           placeholder="Title"
//           type="text"
//           value={form.title}
//         />
//         <label>Rating</label>
//         <input
//           onChange={handleChange}
//           name="rating"
//           placeholder="Rating"
//           type="number"
//           value={form.rating}
//         />
//         <label>5 word review</label>
//         <input
//           onChange={handleChange}
//           name="review"
//           placeholder="Review"
//           type="text"
//           value={form.review}
//         />
//         <select>
//           <option value="2">Films</option>
//         </select>
//         <button>submit</button>
//       </form>
//       <ol>
//         <li>alien</li>
//         <li>the void</li>
//         <li>dawn of the dead</li>
//         <li>blair witch project</li>
//         <li>paranormal activity</li>
//       </ol>
//       <p>Username:{form.username}</p>
//       <p>Title:{form.title}</p>
//       <p>Rating:{form.rating}</p>
//       <p>review:{form.review}</p>
//     </div>
//   );
// }
