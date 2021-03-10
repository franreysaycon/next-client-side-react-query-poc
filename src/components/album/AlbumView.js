import React from "react"
import { useQuery } from "react-query"
import resources from "../../api/resources"
import getAlbum from "../../api/getAlbum"
import { List, ListItem } from "@chakra-ui/layout"
import { Link } from "react-router-dom"

const AlbumView = () => {
    const { data, isLoading } = useQuery(resources.ALBUM, getAlbum)

    if(isLoading){
        return <div>Loading all albums</div>
    }

    return <List>
        {
            data && data.map(({ id, title }) => (
                <ListItem>                
                    <Link to={`/album/${id}`}>
                        {title}
                    </Link>
                </ListItem>
            ))
        }
    </List>
}

export default AlbumView
