import React from "react"
import { useQuery } from "react-query"
import resources from "../../api/resources"
import { Box } from "@chakra-ui/layout"
import getSpecificAlbumPhotos from "../../api/getSpecificAlbumPhotos"
import { Image } from "@chakra-ui/image"
import { useParams } from "react-router"

const SpecificAlbumPhotoView = () => {
    const { id } = useParams()
    const { data, isLoading } = useQuery([resources.ALBUM_PHOTOS, id], async () => {
        return await getSpecificAlbumPhotos(id)
    })

    if(isLoading){
        return <div>Loading specific album photos</div>
    }

    return <Box>
        {
            data && data.map(({ url }) => (
                <Image src={url} />
            ))
        }
    </Box>
}

export default SpecificAlbumPhotoView
