import { useQuery } from '@tanstack/react-query'
import { getArtistAlbums } from '../api'

export const useArtistAlbum = (id: string) => {
  const {
    isFetching: isArtistsAlbumFetching,
    data: albumData,
    isError,
  } = useQuery({
    queryKey: [`artistsAlbum`],
    enabled: id !== null,
    queryFn: () => getArtistAlbums(id),
  })
  return { isArtistsAlbumFetching, albumData, isError }
}
