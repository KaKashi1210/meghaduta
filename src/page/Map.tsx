import Map from "../components/Map"
import Navbar from "../components/Navbar"

export default () => {
  return (
    <>
      <Navbar/>
      <div className="fixed h-screen w-screen mt-36">
        <Map />
      </div>
      <img src="backdrop.jpg" className="h-screen w-screen" />
    </>
  )

}
