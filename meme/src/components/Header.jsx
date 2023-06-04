import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
export default function Header() {

const logo='https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg';

    return (
        <div>
            <AppBar color='action' position='static'>
                <Toolbar>
                    <img src={logo} alt="logo" width={100}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
