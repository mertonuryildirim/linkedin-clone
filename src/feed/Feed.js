import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption
                        color="#70B5F9"
                        title="Photo"
                        Icon={ImageIcon}
                    />
                    <InputOption
                        color="#E7A33E"
                        title="Video"
                        Icon={SubscriptionsIcon}
                    />
                    <InputOption
                        color="#C0CBCD"
                        title="Event"
                        Icon={EventNoteIcon}
                    />
                    <InputOption
                        color="#7FC15E"
                        title="Write Article"
                        Icon={CalendarViewDayIcon}
                    />
                </div>
            </div>

            {/* Posts */}
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />

            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
            <Post
                name="Mert Yıldırım"
                description="This is a test"
                message="WOW this worked"
            />
        </div>
    );
}

export default Feed;
