import React from 'react';
import MessageList from './MessageList';

function Messages(props) {
    return (
        <div className="messages">
            <b>Messages</b>
            <MessageList />
            <div className="message-metrics-wrapper">
                {props.children}
            </div>
        </div>
    );
}

Messages.propTypes = {
    children: React.PropTypes.element,
};

export default Messages;
