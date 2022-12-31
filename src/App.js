import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Eventspt from './Components/Events/Eventspt';
import Eventsps from './Components/Events/Eventsps';
import Eventscc from './Components/Events/Eventscc';
import Eventshf from './Components/Events/Eventshf';
import Merch from './Components/Merch';
import Campaigns from './Components/Campaigns/Campaigns';
import Teams from './Components/Teams/Teamshome';
import MUN from './Components/MUN';
import Sponsors from './Components/Sponsors/Sponsors';
import Contestspt from './Components/Contests/Contestspt';
import Contestsps from './Components/Contests/Contestsps';
import Contestscc from './Components/Contests/Contestscc';
import Contestshf from './Components/Contests/Contestshf';
import ErrorPage from './Components/ErrorPage';
import BookTickets from './Components/BookTickets';
import MerchPart from './Components/MerchPart/merchpart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'           element = {<Home />}/>
        <Route path='/Events/pt'      element = {<Eventspt />}/>
        <Route path='/Events/ps'      element = {<Eventsps />}/>
        <Route path='/Events/cc'      element = {<Eventscc />}/>
        <Route path='/Events/hf'      element = {<Eventshf />}/>
        <Route path='Merch'       element = {<Merch />}/>
        <Route path='/merchPart'       element = {<MerchPart />}/>
        <Route path='Campaigns'   element = {<Campaigns />}/>
        <Route path='Teams'       element = {<Teams />}/>
        <Route path='MUN'         element = {<MUN />}/>
        <Route path='Sponsors'    element = {<Sponsors />}/>
        <Route path='Contests/pt1'    element = {<Contestspt />}/>
        <Route path='Contests/cc1'    element = {<Contestscc />}/>
        <Route path='Contests/ps1'    element = {<Contestsps />}/>
        <Route path='Contests/hf1'    element = {<Contestshf />}/>
        <Route path='BookTickets' element = {<BookTickets />} />
        <Route path='*'           element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
