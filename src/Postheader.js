import User from "./img/User.jpg";

function Postheader(props) {
  return (
    <div className="bg-white max-w-md h-14 rounded-t-lg flex items-center ml-5 justify-between">
      <div className="flex">
        <div className="ml-3 mt-1 relative">
          <img className="rounded-full max-h-10 " src={User} alt="" />
        </div>
        <div className="ml-2 ">
          <p className="text-gray-900 font-bold text-base">Leonardo Leonardi</p>
          <p className="font-bold text-xs text-gray-400">
            14 febbraio 2020 alle 21:31
          </p>
        </div>
      </div>
      <button className="text-black font-bold mr-3 text-xl">...</button>
    </div>
  );
}
export default Postheader;