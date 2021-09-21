import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img
                    src="https://images.unsplash.com/photo-1611458182018-c043f4e947ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                    alt=""
                />
                <Avatar className="sidebar-avatar" />
                <h2>Mert Onur YILDIRIM</h2>
                <h4>mertonuryildirim@gmail.com</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-stat-number">2,543</p>
                </div>

                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-stat-number">2,442</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('frontenddevelopement')}
                {recentItem('design')}
                {recentItem('softwareengineering')}
            </div>
        </div>
    );
}

export default Sidebar;
