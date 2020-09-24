import React from 'react'
import './App.css'

import GlobalStyle from './globalStyle'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { CardsPage } from './Components/Cards/CardsPage'
import { ComponentPage } from './Components/ComponentPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { FlyingSponges } from './Components/3dComponents/FlyingSponges'
import { SpinnerCube } from './Components/3dComponents/SpinnerCube'
import { House } from './Components/3dComponents/House'
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route extend path="/component/FlyingSponges">
                    <ComponentPage
                        title={'Flying Sponges'}
                        desc={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                        tech={['react-stpring', 'react-three-fiber', 'canvas']}
                        children={<FlyingSponges />}
                    />
                </Route>
                <Route extend path="/component/HoverCube">
                    <ComponentPage
                        title={'Hover Cube'}
                        desc={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                        tech={['react-stpring', 'react-three-fiber', 'canvas']}
                        children={<SpinnerCube />}
                    />
                </Route>

                <Route extend path="/component/House">
                    <ComponentPage
                        title={'House'}
                        desc={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                        tech={['react-stpring', 'react-three-fiber', 'canvas']}
                        children={<House />}
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
            {/* <Footer /> */}
        </Router>
    )
}

export default App
