import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Characters() {
  const names = [
    {
      name: "Leon S Kennedy",
    },
    {
      name: "James Sunderland",
    },
    {
      name: "Alma Wade",
    },
    {
      name: "Isaac Clarke",
    },
    {
      name: "Jill Valentine",
    },
    {
      name: "Albert Wesker",
    },
    {
      name: "Alan Wake",
    },
    {
      name: "Lara Croft",
    },
    {
      name: "Agent47",
    },
    {
      name: "Link",
    },
    {
      name: "Kratos",
    },
    {
      name: "Master Chief",
    },
    {
      name: "Solid Snake",
    },
  ];
  const [params] = useSearchParams();
  const sort = params.get("sortBy");
  console.log(sort);

  if (sort === "asc") {
    names.sort();
  } else if (sort == "desc") {
    names.sort().reverse();
  }

  return (
    <div>
      <h1>cool vgame characters</h1>
      <p>sort out these characters!</p>
      <Link to={`/sort-names`}>dont sort em</Link>&nbsp;
      <Link to={`/sort-names?sortBy=asc`}>sort by ascending</Link>&nbsp;
      <Link to={`/sort-names?sortBy=desc`}>sort by descending</Link>
      {/* <ol>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol> */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>{names[index].name}</li>
        ))}
      </ul>
    </div>
  );
}
