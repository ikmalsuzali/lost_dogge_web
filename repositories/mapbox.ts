

const useMapboxRepository = async () => {
  const config = useRuntimeConfig()
  const sessionToken = localStorage.getItem('sessionId')
  const mapboxApi = config.MAPBOX_KEY


const getAddressByLongLat = async (longitude: number, latitude: number) => {
    const data = await useFetch(`https://api.mapbox.com/geocoding/v5/{endpoint}/${longitude},${latitude}.json?access_token=${accessToken}&session_token=${sessionToken}`)
    return data
}

const retrieveSuggestions = async (searchText: string) => {
  const data = await useFetch(`https://api.mapbox.com/search/v1/suggest/${searchText}?access_token=${mapboxApi}&session_token=${sessionToken}&language=EN`)
  return data
}

return  { getAddressByLongLat, retrieveSuggestions  }

}

export default useMapboxRepository
