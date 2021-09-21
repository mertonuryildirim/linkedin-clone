import { Avatar } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import './Post.css';

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <p>{message}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
