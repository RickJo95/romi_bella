import FinalScreen from "./components/FinalScreen";
import StoryIndexPage from "./components/Stories/Page";
import Us from "./components/Stories/Us";
import Vet from "./components/Stories/Vet";
import Test from "./components/Test";
import WelcomeScreen from "./components/WelcomeScreen";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path="test" element={<Test />} />
        <Route path="story">
          <Route index element={<StoryIndexPage />} />
          <Route path="us" element={<Us />} />
          <Route path="vet" element={<Vet />} />
        </Route>
        <Route path="final" element={<FinalScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
