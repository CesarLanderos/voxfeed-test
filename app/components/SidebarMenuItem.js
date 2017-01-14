import React from 'react';
import { Link } from 'react-router';

function SidebarMenuItem(props) {
    return (
        <Link
            to={props.linkTo}
            className={`sidebar-menu-item ${props.className || ''}`}
            activeClassName="active"
            data-notifications={props.notificationNumber}
        >
            <img src={props.iconUrl} alt={props.label} />
            <span>{props.label}</span>
        </Link>
    );
}

SidebarMenuItem.propTypes = {
    className: React.PropTypes.string,
    iconUrl: React.PropTypes.string,
    label: React.PropTypes.string,
    linkTo: React.PropTypes.string,
    notificationNumber: React.PropTypes.number,
};

export default SidebarMenuItem;
