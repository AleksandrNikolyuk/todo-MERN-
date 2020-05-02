import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { TodoChatButton, TodoCloseButton } from '../../@todo';
import TodoChatBlock from './TodoChatBlock';

const styles = () => ({
	root: {
        display: 'flex',
        flexDirection: 'column',
	},
});

function TodoChatItem({
    classes,
}) {

    const [chatBlock, setChatBlock] = useState(false)

    const hendlerClick = () => {
        setChatBlock(true)
    }

    const closeHendlerClick = () => {
        setChatBlock(false)
    }

    return (
        <div className={classes.root}>
            <div>
                { chatBlock 
                    ? <div>
                        <TodoCloseButton
                            clickHandler={closeHendlerClick}
                        />
                        <TodoChatBlock/> 
                    </div>
                    : null
                }
            </div>
            <TodoChatButton
                clickHandler={hendlerClick}
            />
        </div>
    );
}

TodoChatItem.defaultProps = {

};

TodoChatItem.propTypes = {
	handler: PropTypes.func,
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoChatItem);
