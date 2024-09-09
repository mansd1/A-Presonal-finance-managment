import React from "react";
import "./App.css";
import AccountSection from "./Components/Pages/Account-page/Section_Account/AccountSection";
import HeaderPage from "./Components/Pages/Home-page/Header/HeaderPage";
import SectionBody from "./Components/Pages/Home-page/Section/SectionBody";
function App() {
  return (
    <>
      <HeaderPage nameButton={"sign up"} />
      <SectionBody
        title={"Empower your finances,simplify your life"}
        description={
          "PayMint: Simplify payments, track expenses,achieve financial goals"
        }
        btnName={"Get started"}
      />
      <AccountSection />
    </>
  );
}

export default App;
