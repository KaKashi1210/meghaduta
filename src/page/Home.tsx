import Navbar from "../components/Navbar"
import Info from "../components/Info"

export default () => {
  return (
    <>
      <div className="fixed">
        <Navbar />
        <div className=" mt-52">
          <Info />
        </div>
      </div>
      <img src="backdrop.jpg" className="h-screen w-screen" />
    </>
  )
}
