import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, title, Icon }) {
    return (
        <div>
            <div className="header-option">
                {Icon && <Icon className="header-option-icon" />}
                {avatar && (
                    <Avatar className="header-option-icon" src={avatar} />
                )}
                <h3 className="header-option-title">{title}</h3>
            </div>
        </div>
    );
}

export default HeaderOption;
