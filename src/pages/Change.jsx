import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import user1 from "../stores/userStore";
import tiles1 from "../stores/tileStore";
import { useNavigate, Link } from "react-router-dom";

const Change = observer(({ index }) => {
  const { auth } = user1;
  const { updateContent, tiles } = tiles1;

  const navigate = useNavigate();
  const [title, setTitle] = useState(tiles[index].title);
  const [content, setContent] = useState(tiles[index].content);

  useEffect(() => {
    if (!auth) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 mb-4 px-4 py-2 rounded border border-gray-300 resize-none focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => {
            updateContent(index, title, content);
            setTitle("title");
            setContent("content");
            navigate(`/home/${index}`);
          }}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
        >
          Update
        </button>
        <Link
          to={`/home/${index}`}
          className="block mt-4 text-blue-500 font-bold hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
});

export default Change;
