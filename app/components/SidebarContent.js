import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';

function SidebarContent() {
    return (
        <div className="sidebar-content">
            <div className="logo">
                <img src="img/logo_vf.png" alt="VoxFeed" />
            </div>
            <SidebarMenuItem
                linkTo="/home"
                iconUrl="img/inicio_icon.png"
                label="INICIO"
            />
            <SidebarMenuItem
                linkTo="/messages"
                className="profile"
                iconUrl="img/user.png"
                label="MANNY"
                notificationNumber={10}
            />
        </div>
    );
}

export default SidebarContent;
