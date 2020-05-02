import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@material-ui/core';
import TodoLayout from './app/components/TodoLayout';
import TodoAuthPage from './app/components/TodoAuthPage';
// import TodoTab from './app/components/TodoTab'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Provider store={store} path="/todo" exact>
                    <Fragment>
                        <CssBaseline/>
                        <TodoLayout/>
                    </Fragment>
                </Provider>
                <Redirect to="/todo" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <TodoAuthPage/>
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}