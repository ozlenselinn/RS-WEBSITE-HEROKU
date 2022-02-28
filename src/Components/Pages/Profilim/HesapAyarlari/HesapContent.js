import React from "react";
import Grid from "hedron";
import "./HesapStyle.css";
import ProfileSet from "./ProfileSet";
import Password from "./Password";
import Notification from "./Notification";
import Bill from "./Bill";
import General from "./General";

import { ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function HesapContent() {
  return (
    <div >        
    <Grid.Provider debug padding="20px" breakpoints={{
    sm: "-500",
    md: "501-750",
    lg: "+750"
    }}>
    
    <Grid.Bounds id="container1" direction="vertical" height="700px" halign="center" >      
        <Grid.Box id="contain" width="60%" > 
        <div className="box">         
        <ChakraProvider >
        <div className="chakraTabs" >
            <Tabs  variant='enclosed'>
                <TabList>
                    <Tab className="list" fontSize={'20px'} ><i className="fas fa-user"></i>&nbsp; Profil Bilgileri</Tab>
                    <Tab className="list" fontSize={'20px'}><i className="fas fa-shield-alt"></i>&nbsp; Şifre</Tab>
                    <Tab className="list" fontSize={'20px'}><i class="far fa-bell"></i>&nbsp; Bildirimler</Tab>
                    {/* <Tab className="list" fontSize={'20px'}><i class="fas fa-file-invoice-dollar"></i>&nbsp; Fatura Bilgileri</Tab> */}
                    <Tab className="list" fontSize={'20px'}><i class="fas fa-cog"></i>&nbsp; Genel</Tab>                    
                </TabList>
                <TabPanels>
                    <TabPanel className="profile">
                        <ProfileSet></ProfileSet>
                    </TabPanel>
                    <TabPanel className="password">
                        <Password></Password>
                    </TabPanel>
                    <TabPanel className="bildirim">                      
                      <Notification></Notification>                
                    </TabPanel>
                    {/* <TabPanel>
                       <Bill></Bill>
                    </TabPanel> */}
                    <TabPanel>
                      <p>Ne koyacağımı bilemedim...</p>
                      <General></General>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
        </ChakraProvider>
        </div>  
        </Grid.Box>
    </Grid.Bounds>
      
  </Grid.Provider>
    </div>
  );
}

export default HesapContent;