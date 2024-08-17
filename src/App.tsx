import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Project from "./components/Project";

function App() {
  return (
    <>
      <h1 className="text-center font-bold text-[40px] mb-7">React Apps</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <Project title="Counter" link="counter" />
      </div>
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
      </Routes>
    </>
  );
}

export default App;
