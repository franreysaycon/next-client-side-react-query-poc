import React from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import PokemonView from "./pokemon/PokemonView"

const PokemonPage = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/pokemon/:name">
                <PokemonView />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default PokemonPage
