import "./App.css";
import Navbar from "./react-components/navbar";
import Mainbody from "./react-components/mainbody";
import image1 from "./images/Rectangle 77.png";
import TraveDetails from "./react-components/traveldetails";
function App() {
  const Places = TraveDetails.map((place) => {
    return <Mainbody key={place.id}
      {...place} />
  })
  return (
    <>
      <Navbar />
      <div className="container">
        {Places}
      </div>
    </>
  )
}
export default App;
