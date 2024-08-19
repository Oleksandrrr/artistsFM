import { useQuery } from '@tanstack/react-query'
import { fetchArtists } from '../api'

export const useFavoriteArtistsInfo = () => {
  const {
    isFetching: isGettingFavoriteArtists,
    data: artistsData,
    isError,
  } = useQuery({
    queryKey: [`artists`],
    queryFn: () => fetchArtists(),
  })
  return { isGettingFavoriteArtists, artistsData, isError }
}
