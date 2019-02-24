import React, {Fragment} from 'react';
import NavHeader from "./NavHeader";
import Banner from "./Banner";
import PreSales from "./PreSales";
import MainChart from "./MainChart";

function MainContainer({...props}){
  return (
      <Fragment>
        <NavHeader/>
        <Banner/>
        <PreSales/>
        <MainChart/>
      </Fragment>
  );
}

export default MainContainer;
