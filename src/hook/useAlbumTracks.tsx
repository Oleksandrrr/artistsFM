import { useQuery } from '@tanstack/react-query'
import { getAlbumTracks } from '../api'
export const useAlbumTracks = (artistName: string, albumName: string) => {
  const {
    isFetching: isTracksFetching,
    data: albumTracks,
    isError: isGetAlbumTracksError,
  } = useQuery({
    queryKey: [`albumTracks`, albumName],
    enabled: artistName !== '' && albumName !== '',
    queryFn: () => getAlbumTracks(artistName, albumName),
  })
  return { isTracksFetching, albumTracks, isGetAlbumTracksError }
}
