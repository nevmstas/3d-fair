import React from 'react'
import './App.css'

import GlobalStyle from './globalStyle'
import { Header } from './Components/Header'
import { CardsPage } from './Components/Cards/CardsPage'
import { ComponentPage } from './Components/ComponentPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { FlyingSponges } from './Components/3dComponents/FlyingSponges'
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route extend path="/component/FlyingSponges">
                    <ComponentPage
                        title={'Flying Sponges'}
                        desc={'desc desc descdescdescdescdesc'}
                        tech={'canvas'}
                        children={<FlyingSponges />}
                    />
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
