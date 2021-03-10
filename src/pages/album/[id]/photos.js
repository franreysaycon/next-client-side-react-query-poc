import React from "react"
import { useQuery } from "react-query"
import resources from "../../../api/resources"
import { Box } from "@chakra-ui/layout"
import { useRouter } from "next/router"
import getSpecificAlbumPhotos from "../../../api/getSpecificAlbumPhotos"
import { Image } from "@chakra-ui/image"

const SpecificAlbumPhotoPage = () => {
    const router = useRouter()
    const { data, isLoading } = useQuery([resources.ALBUM_PHOTOS, router.query.id], async () => {
        return await getSpecificAlbumPhotos(router.query.id)
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

export default SpecificAlbumPhotoPage
