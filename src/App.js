import './App.css';
import Clients from "./components/Client"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Kitchen from "./components/Kitchen";

function App() {
    //routing
    let Component
    switch (window.location.pathname) {
        case "/" :
            Component = Home
            break
        case "/clients":
            Component = Clients
            break
        case "/kitchen":
            Component = Kitchen
    }

  return (
      <>
          <Navbar />
          <Component/>
      </>
  );
}

export default App;
