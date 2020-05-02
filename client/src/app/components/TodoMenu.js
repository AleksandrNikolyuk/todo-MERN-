import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { TodoExitButton } from '../../@todo'
import { AuthContext } from '../../context/AuthContext';
import TodoSearchContainer from './TodoSearchContainer';
import TodoLang from './TodoLang';
 
const styles = () => ({
	root: {
		background: '#b0e0e6',
		width: '23%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: '75px',
	},
	header: {
		width: '100%',
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	}
});

function TodoMenu({
	classes,
	t
}) {

	const auth = useContext(AuthContext)

	const logoutHandler =  event => {
		event.preventDefault()
        auth.logout()
    }
	
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div>
					<h1>{t('title')}</h1>
				</div>
				<TodoExitButton
					clickHandler={logoutHandler}
				/>
			</div>
			<TodoSearchContainer/>
			<TodoLang/>
		</div>
	);
	
}

TodoMenu.defaultProps = {
	classes: {},
};

TodoMenu.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
};

export default withTranslation()(withStyles(styles)(TodoMenu));