import React from 'react'
import './App.css'

import GlobalStyle from './globalStyle'
import { Header } from './Components/Header'
import { CardsPage } from './Components/Cards/CardsPage'
import { ComponentPage } from './Components/ComponentPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route extend path="/component/:componentId?">
                    <ComponentPage />
                </Route>
                <Route extend path="/components">
                    <CardsPage />
                </Route>
                <Route path="/about">
                    <div>about</div>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
