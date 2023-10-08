import { Link } from "react-router-dom"

export default () => {
  return (
    <>
      <ul className="flex flex-row mt-[300px]">

        <ul className="ml-[300px]">
          <li className="text-white text-7xl font-bold"> Welcome to <br /> 

         <div className="font-extrabold"> Meghaduta </div>
          </li>

          <li className="text-black text-3xl font-semibold mt-24">Cloud Burst Prediction for <br />
            Resilient Communities. </li>
        </ul>

        <ul className="ml-80">
          <li className="text-black text-2xl font-black">
            In the face of increasing climate <br />
            variability and the heightened risk of <br />
            extreme weather events, accurate <br />
            weather prediction and disaster <br />
            preparedness have become critical <br />
            concerns.
          </li>

          <li>
            <button className="font-sans bg-blue-400 text-white text-xl p-3 rounded-3xl border-solid border-2 border-black
            ml-36 mt-5">
              <Link to="/map">
                Check Now
              </Link>
            </button>
          </li>

        </ul>

      </ul>
    </>
  )
}
