import { observer } from "mobx-react-lite";
import tiles1 from "../stores/tileStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import user1 from "../stores/userStore";

const Detail = observer(({ index }) => {
  const { tiles, incrementRating } = tiles1;
  const { auth } = user1;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">{tiles[index].title}</h1>
        <p className="text-gray-600 mb-4">{tiles[index].content}</p>
        <h3 className="text-blue-500 font-medium mb-4">
          Rating: {tiles[index].rating}
        </h3>
        <button
          onClick={() => {
            incrementRating(index);
          }}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600 mr-4"
        >
          Like
        </button>
        <Link
          to={`/update/${index}`}
          className="text-blue-500 font-medium underline hover:text-blue-600"
        >
          Change article
        </Link>
        <Link
          to={"/home"}
          className="block mt-4 text-blue-500 font-bold hover:underline"
        ></Link>
      </div>
    </div>
  );
});

export default Detail;
