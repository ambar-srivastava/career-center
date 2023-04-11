import React from "react";
import { NavBar } from "./components";
import { ProfilePage } from "./pages";

const App = () => {
  return (
    <div className="bg-[#F4F4F4] w-full h-screen">
      <NavBar />
      <ProfilePage />
    </div>
  );
};

export default App;
