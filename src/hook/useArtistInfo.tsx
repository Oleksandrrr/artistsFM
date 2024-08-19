import { useQuery } from '@tanstack/react-query'
import { getArtistInfo } from '../api'

export const useArtistInfo = (id: string) => {
  const {
    isFetching: isArtistDataFetching,
    data: artistData,
    isError: isGetArtistDataError,
  } = useQuery({
    queryKey: [`artists`, id],
    enabled: id !== null,
    queryFn: () => getArtistInfo(id),
  })
  return { isArtistDataFetching, artistData, isGetArtistDataError }
}
