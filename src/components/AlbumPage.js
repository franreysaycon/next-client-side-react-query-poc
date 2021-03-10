import React from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import AlbumView from "./album/AlbumView"
import SpecificAlbumPhotoView from "./album/SpecificAlbumPhotoView"
import SpecificAlbumView from "./album/SpecificAlbumView"

const AlbumPage = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/album/:id/photos">
                <SpecificAlbumPhotoView />
            </Route>
            <Route path="/album/:id">
                <SpecificAlbumView />
            </Route>
            <Route path="/album">
                <AlbumView />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default AlbumPage
