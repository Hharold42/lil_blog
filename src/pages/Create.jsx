import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import tiles1 from "../stores/tileStore";
import user1 from "../stores/userStore";
import { useNavigate, Link } from "react-router-dom";

const Create = observer(() => {
  const { addContent } = tiles1;
  const { auth } = user1;

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 mb-4 px-4 py-2 rounded border border-gray-300 resize-none focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => {
            addContent(title, content);
            setTitle("title");
            setContent("content");
            navigate("/home");
          }}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
        >
          Add
        </button>
        <Link
          to={"/home"}
          className="block mt-4 text-blue-500 font-bold hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
});

export default Create;
