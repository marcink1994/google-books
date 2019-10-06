import React from 'react';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from 'reducers';
import { Header, Main, Wrapper, About, NoPage } from 'components';

const App = () => {
    const middleware = [promise, thunk];

    return (
        <Provider
            store={createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)))}
        >
            <Router>
                <Wrapper>
                    <Header />
                    <Switch>
                        <Route component={Main} exact path="/" />
                        <Route component={Main} path="/:id(\d+)" />
                        <Route component={About} path="/about" />
                        <Route component={NoPage} />
                    </Switch>
                </Wrapper>
            </Router>
        </Provider>
    );
};


export default App;

