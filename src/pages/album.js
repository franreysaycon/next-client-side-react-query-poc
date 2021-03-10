import dynamic from "next/dynamic"

const AlbumPageNoSsr = dynamic(() => import('../components/AlbumPage'), {
    ssr: false
})

export default AlbumPageNoSsr
