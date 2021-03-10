import axios from "axios"

const getSpecificAlbum = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
    return response.data
}

export default getSpecificAlbum
