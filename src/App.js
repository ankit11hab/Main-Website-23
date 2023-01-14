import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Eventspt from "./Components/Events/Eventspt";
import Eventsps from "./Components/Events/Eventsps";
import Eventscc from "./Components/Events/Eventscc";
import Eventshf from "./Components/Events/Eventshf";
import Merch from "./Components/Merch";
import Campaigns from "./Components/Campaigns/Campaigns";
import Teams from "./Components/Teams/Teamshome";
import MUN from "./Components/MUN";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contestsvn from "./Components/Contests/Contestsvn";
import Contestsca from "./Components/Contests/Contestsca";
import Contestsd from "./Components/Contests/Contestsd";
import Contestsm from "./Components/Contests/Contestsm";
import Contestsl from "./Components/Contests/Contestsl";
import Contestsat from "./Components/Contests/Contestsat";
import Contestsdd from "./Components/Contests/Contestsdd";
import Contestslca from "./Components/Contests/Contestslca";
import Contestss from "./Components/Contests/Contestss";
import Contestsq from "./Components/Contests/Contestsq";
import Contestsdr from "./Components/Contests/Contestsdr";
import ErrorPage from "./Components/ErrorPage";
import BookTickets from "./Components/BookTickets";
import HeroSection from "./Components/Home/HeroSection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events/pt" element={<Eventspt />} />
        <Route path="/Events/ps" element={<Eventsps />} />
        <Route path="/Events/cc" element={<Eventscc />} />
        <Route path="/Events/hf" element={<Eventshf />} />
        <Route path="Merch" element={<Merch />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="Campaigns" element={<Campaigns />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="Contests/vn" element={<Contestsvn />} />
        <Route path="Contests/ca" element={<Contestsca />} />
        <Route path="Contests/d" element={<Contestsd />} />
        <Route path="Contests/m" element={<Contestsm />} />
        <Route path="Contests/l" element={<Contestsl />} />
        <Route path="Contests/at" element={<Contestsat />} />
        <Route path="Contests/dd" element={<Contestsdd />} />
        <Route path="Contests/lca" element={<Contestslca />} />
        <Route path="Contests/s" element={<Contestss />} />
        <Route path="Contests/q" element={<Contestsq />} />
        <Route path="Contests/dr" element={<Contestsdr />} />
        <Route path="MUN" element={<MUN />} />
        <Route path="Sponsors" element={<Sponsors />} />
        <Route path="BookTickets" element={<BookTickets />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
