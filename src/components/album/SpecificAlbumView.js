import React from "react"
import { useQuery } from "react-query"
import { Box } from "@chakra-ui/layout"
import resources from "../../api/resources"
import getSpecificAlbum from "../../api/getSpecificAlbum"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const SpecificAlbumView = () => {
    const { id } = useParams()
    const { data, isLoading } = useQuery([resources.ALBUM, id], async () => {
        return await getSpecificAlbum(id)
    })

    if(isLoading){
        return <div>Loading specific album</div>
    }

    return <Box>
        <div>{data.title}</div>
        <div>{data.id}</div>
        <Link to={`/album/${data.id}/photos`}>See Photos</Link>
    </Box>
}

export default SpecificAlbumView
