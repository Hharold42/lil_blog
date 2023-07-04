import { Route, Routes, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import userStore from "./stores/userStore";
import Create from "./pages/Create";
import tiles1 from "./stores/tileStore";
import Detail from "./pages/Detail";
import Change from "./pages/Change";

const App = observer(() => {
  const { auth } = userStore;
  const { tiles } = tiles1;

  const pseudoDynamicPages = tiles.map((i, index) => (
    <Route
      key={index}
      path={`/home/${index}`}
      element={<Detail index={index} />}
    />
  ));

  const pseudoDynamicPages2 = tiles.map((i, index) => (
    <Route
      key={index * index}
      path={`/update/${index}`}
      element={<Change index={index} />}
    />
  ));

  return (
    <div className="App">
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="text-white text-xl">
          <Link
            to={"/home"}
            className={auth ? "p-2" : "p-2 pointer-events-none"}
          >
            Home
          </Link>
          <Link
            to={"/create"}
            className={auth ? "p-2" : "p-2 pointer-events-none"}
          >
            Create
          </Link>
        </div>
        <div>{/* Add any additional navigation elements here */}</div>
      </nav>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={auth ? <Home /> : <Auth />} />
        {pseudoDynamicPages}
        {pseudoDynamicPages2}
      </Routes>
    </div>
  );
});

export default App;
