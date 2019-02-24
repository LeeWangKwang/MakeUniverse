import React, {Fragment} from 'react';

import Header from "../../components/Header/Header";
import Button from "../../components/CustomButtons/Button";
import {Build, Chat, Face} from "@material-ui/icons";
import CustomTabs from "../../components/CustomTabs/CustomTabs";

function NavHeader({...props}){
  return (
      <Header
          color={"warning"}
          rightLinks={
            <Fragment>
              <Button type="button" color="warning">Home</Button>
              <Button type="button" color="warning">Pre-Sale</Button>
              <Button type="button" color="warning"><Build/>How it works</Button>
              <Button type="button" color="warning">White Paper</Button>
              <Button type="button" color="warning"><Face/>Contact Us</Button>

            </Fragment>
          }
          // fixed={true}
          brand={"MAKE UNIVERSE"}
      />
  );
}

export default NavHeader;
