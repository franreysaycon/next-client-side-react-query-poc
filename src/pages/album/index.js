import React from "react"
import { useQuery } from "react-query"
import resources from "../../api/resources"
import getAlbum from "../../api/getAlbum"
import Link from "next/link"
import { List, ListItem } from "@chakra-ui/layout"

const AlbumPage = () => {
    const { data, isLoading } = useQuery(resources.ALBUM, getAlbum)

    if(isLoading){
        return <div>Loading all albums</div>
    }

    return <List>
        {
            data && data.map(({ id, title }) => (
                <ListItem>                
                    <Link href="/album/[id]" as={`/album/${id}`}>
                        {title}
                    </Link>
                </ListItem>
            ))
        }
    </List>
}

export default AlbumPage
