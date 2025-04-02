import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router";
import { useState } from "react";

// This is a Layout component, using React's composable nature
const MainLayout = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <div className="flex-grow">
        {/* The Outlet component is a placeholder for children components under this route */}
        <Outlet context={{ signedIn, setSignedIn }} />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
