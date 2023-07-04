import { observer } from "mobx-react-lite";
import user1 from "../stores/userStore";
import tiles1 from "../stores/tileStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = observer(() => {
  const { tiles, incrementRating } = tiles1;
  const { auth } = user1;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  const content = tiles.map((item, index) => (
    <div key={index} className="my-4 p-4 bg-white rounded shadow">
      <div
        onClick={() => navigate(`/home/${index}`)}
        className="cursor-pointer"
      >
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-gray-600">{item.content}</p>
        <h3 className="text-blue-500 font-medium">Rating: {item.rating}</h3>
      </div>
      <button
        onClick={() => {
          incrementRating(index);
        }}
        className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
      >
        Like
      </button>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-8">
      <div className="max-w-3xl mx-auto">{content}</div>
    </div>
  );
});

export default Home;
