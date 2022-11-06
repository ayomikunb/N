//import logo from './logo.svg';
import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      
      <h1>My Profile</h1>
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
