import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                <span className="logo"> Juwwy Tv [Admin Panel]</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                    <Settings />
                    </div>
                    <img src="https://images.unsplash.com/photo-1627822988387-39d9382afc00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" className="topAvatar" />

                </div>
            </div>
        </div>
    )
}
