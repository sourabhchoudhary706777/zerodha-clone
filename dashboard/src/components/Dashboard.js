import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Menu from "./Menu";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
axios.defaults.withCredentials = true;

const Dashboard = () => {

  // -------------------------
  // PROTECT ROUTE
  // -------------------------
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/me`, {
      withCredentials: true,
    })
    .then(res => {
      if (!res.data.status) {
        window.location.href = process.env.REACT_APP_FRONTEND_URL;
      }
    })
    .catch(() => {
      window.location.href = process.env.REACT_APP_FRONTEND_URL;
    });
  }, []);

  // -------------------------
  // LOGOUT FUNCTION
  // -------------------------
  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .finally(() => {
        window.location.href = process.env.REACT_APP_FRONTEND_URL;
      });
  };


  return (
    <div className="dashboard-container">
      
      {/* Logout Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          background: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            background: "#2874f0",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions  />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
