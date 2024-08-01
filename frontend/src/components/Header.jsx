import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaFlag, FaUserTie, FaSearch } from 'react-icons/fa'; // Example icons from react-icons

const Header = () => {
  return (
    <div className="bg-[#24637E] h-24 flex items-center">
      <div>
        <img src="https://premierzone.vercel.app/static/media/PL.bd6dbd051a4638bc328e.webp" className="w-16 h-auto" />
      </div>
      <div className="flex justify-around flex-grow">
        <div className="-mx-12">
          <Link to="/" className="flex items-center text-white no-underline relative group">
            <FaHome className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
            <span className="opacity-0 ml-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Home</span>
          </Link>
        </div>
        <div className="-mx-12">
          <Link to="/clubs" className="flex items-center text-white no-underline relative group">
            <FaUsers className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
            <span className="opacity-0 ml-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Clubs</span>
          </Link>
        </div>
        <div className="-mx-12">
          <Link to="/countries" className="flex items-center text-white no-underline relative group">
            <FaFlag className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
            <span className="opacity-0 ml-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Countries</span>
          </Link>
        </div>
        <div className="-mx-12">
          <Link to="/positions" className="flex items-center text-white no-underline relative group">
            <FaUserTie className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
            <span className="opacity-0 ml-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Positions</span>
          </Link>
        </div>
        <div className="-mx-12">
          <Link to="/search" className="flex items-center text-white no-underline relative group">
            <FaSearch className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
            <span className="opacity-0 ml-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;