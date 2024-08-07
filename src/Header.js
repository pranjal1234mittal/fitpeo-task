import React from "react";
import "./style.css"
import {
    Grid,
    TextField
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
    return (
        <>
        <Grid container className="mainHeaderGrid">
            <Grid item className="searchGrid">
                <GridViewRoundedIcon className="mainApplicationIcon" />
                <TextField 
                    className="searchBox"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <SearchRoundedIcon className="searchIcon" />
                        )
                    }}
                />
            </Grid>
            <Grid item className="accountGrid">
                <EmailOutlinedIcon className="accountIcon"/>
                <SettingsOutlinedIcon className="accountIcon"/>
                <NotificationsOutlinedIcon className="accountIcon"/>
                <AccountCircleOutlinedIcon className="accountIcon"/>
            </Grid>
        </Grid>
        </>
    )
};

export default Header;