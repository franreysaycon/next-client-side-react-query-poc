import axios from "axios"

const getAlbum = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
    return response.data
}

export default getAlbum
