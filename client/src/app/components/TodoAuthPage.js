import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Input } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { TodoButton, TodoRegButton } from '../../@todo';
import { useHttp } from '../../@hook/http.hook'
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../@hook/message.hook';

const styles = () => ({
	root: {
		width: '100%',
		height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    block: {
        width: '500px',
        height: '300px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #a9a9a9', 
        borderRadius: '20px',
        background: '#eaf7f8',
    },
    editField: {
        width: '80%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    buttonsBlock: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-around'
    },
});

function TodoAuthPage({
    t, 
    classes
}) {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    })
    const message = useMessage()

    useEffect(() => {
       message(error)
       clearError()
    }, [error, message, clearError])

    const changeHadler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) { }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) { }
    }
   
    return (
        <div className={classes.root}>
            <div className={classes.block}>
                <h1>{t('auth')}</h1>
                <div className={classes.editField}>
                    <Input
                        type={'text'}
                        id={'email'}
                        name={'email'}
                        placeholder={t('email')}
                        fullWidth={true}
                        onChange={changeHadler}
                    />
                    <Input
                        type={'password'}
                        id={'password'}
                        name={'password'}
                        placeholder={t('password')}
                        fullWidth={true}
                        onChange={changeHadler}
                    />
                </div>
                <div className={classes.buttonsBlock}>
                    <TodoButton
                        label={t('buttons.enter')}
                        clickHandler={loginHandler}
                        disabled={loading}
                    />
                    <TodoRegButton
                        label={t('buttons.regist')}
                        clickHandler={registerHandler}
                        disabled={loading}
                    />
                </div>
            </div>
        </div>
    )
}

TodoAuthPage.propTypes = {
    classes: PropTypes.object,
	t: PropTypes.func,
}

export default (withTranslation()(withStyles(styles, { withTheme: true })(TodoAuthPage)));
