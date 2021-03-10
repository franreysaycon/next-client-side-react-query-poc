import React from "react"
import { useQuery } from "react-query"
import { Box } from "@chakra-ui/layout"
import resources from "../../../api/resources"
import { useRouter } from "next/router"
import getSpecificAlbum from "../../../api/getSpecificAlbum"
import Link from "next/link"

const SpecificAlbumPage = ({ album }) => {
    const router = useRouter()
    const { data, isLoading } = useQuery([resources.ALBUM, router.query.id], async () => {
        return await getSpecificAlbum(router.query.id)
    }, {
        initialData: album
    })

    if(isLoading){
        return <div>Loading specific album</div>
    }

    return <Box>
        <div>{data.title}</div>
        <div>{data.id}</div>
        <Link href="/album/[id]/photos" as={`/album/${data.id}/photos`}>See Photos</Link>
    </Box>
}

SpecificAlbumPage.getInitialProps = async ({ query }) => {
    const album = await getSpecificAlbum(query.id)
    return { album }
}

export default SpecificAlbumPage
