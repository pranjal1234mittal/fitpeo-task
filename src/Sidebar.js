import React, { useState } from "react";
import "./style.css";
import { Grid } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function Sidebar() {
    const [activeIcon, setActiveIcon] = useState(null);

    const handleClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <Grid container className="mainSidebarGrid">
            <Grid item className="topIcons">
                <HomeRoundedIcon 
                    className={`sidebarIcons ${activeIcon === 'home' ? 'active' : ''}`} 
                    onClick={() => handleClick('home')} 
                />
                <InsertChartOutlinedIcon 
                    className={`sidebarIcons ${activeIcon === 'chart' ? 'active' : ''}`} 
                    onClick={() => handleClick('chart')} 
                />
                <InventoryOutlinedIcon 
                    className={`sidebarIcons ${activeIcon === 'inventory' ? 'active' : ''}`} 
                    onClick={() => handleClick('inventory')} 
                />
                <AccountBalanceWalletOutlinedIcon 
                    className={`sidebarIcons ${activeIcon === 'wallet' ? 'active' : ''}`} 
                    onClick={() => handleClick('wallet')} 
                />
                <ShoppingBagOutlinedIcon 
                    className={`sidebarIcons ${activeIcon === 'shopping' ? 'active' : ''}`} 
                    onClick={() => handleClick('shopping')} 
                />
            </Grid>
            <Grid item className="bottomIcons">
                <LogoutRoundedIcon 
                    className={`sidebarIcons ${activeIcon === 'logout' ? 'active' : ''}`} 
                    onClick={() => handleClick('logout')} 
                />
            </Grid>
        </Grid>
    );
}

export default Sidebar;
