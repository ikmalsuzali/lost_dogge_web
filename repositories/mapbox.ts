import axios from 'axios'

const useMapboxRepository = () => {
    const config = useRuntimeConfig()
    const mapboxApiKey = config.MAPBOX_KEY

    const getGeocodingLocations = async (searchText: string) => {
        const data = await axios(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                searchText
            )}.json?country=us&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${mapboxApiKey}&language=EN`
        )

        return data?.data?.features || []
    }

    return { getGeocodingLocations }
}

export default useMapboxRepository
