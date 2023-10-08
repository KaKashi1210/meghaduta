import { Link } from "react-router-dom"

export default () => {

  return (
    <>
      <div className="absolute items-center ml-auto">
        <ul className="flex flex-row w-full  p-5 items-center text-white justify-between mx-36" >

          <Link to="/">
            <ul className="flex flex-row items-center m-auto">
              <li>
                <img src="./../../public/logo.png" height={60} width={60} />
              </li>
              <li className="text-3xl font-sans mx-5">  Meghaduta </li>
            </ul>
          </Link>
          <ul className="flex flex-row justify-around ml-96">
            <Link to='/'>
              <li className=" text-2xl font-sans">Home</li>
            </Link>
            <Link to="/map">
              <li className="ml-9 text-2xl font-sans">Map</li>
            </Link>
            <Link to={'/dashboard'}>
              <li className="ml-9 text-2xl font-sans">DashBoard</li>
            </Link>
            <li className="ml-9 text-2xl font-sans">Feedback</li>
          </ul>
        </ul>
      </div>
    </>
  )
}
