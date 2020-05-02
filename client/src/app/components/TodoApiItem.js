import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { TodoApiButton, TodoCloseButton } from '../../@todo';
import TodoApiBlock from './TodoApiBlock';

const styles = () => ({
	root: {
        display: 'flex',
        flexDirection: 'column',
	},
});

function TodoApiItem({
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
                        <TodoApiBlock/> 
                    </div>
                    : null
                }
            </div>
            <TodoApiButton
                clickHandler={hendlerClick}
            />
        </div>
    );
}

TodoApiItem.defaultProps = {

};

TodoApiItem.propTypes = {
	handler: PropTypes.func,
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoApiItem);
