import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import Countries from "./components/Countries";
import Positions from "./components/Positions";
import Search from "./components/Search";


const App = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlayers();
  }, []);

   const fetchPlayers = async () => {
     try {
       const response = await axios.get(
         "https://premier-zone.onrender.com/api/v1/player",
         {
           headers: {
             "Content-Type": "text/plain",
           },
           data: JSON.stringify({}),
         }
       );
       setPlayers(response.data);
     } catch (error) {
       console.error(error);
     }
   };
  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <>
      <Header />
      <div className="mt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/data" element={<TeamData />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
