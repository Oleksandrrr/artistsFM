import { FlatList, View } from 'react-native'
import React from 'react'
import { useArtistAlbum } from '../hook/useArtistAlbum'
import { ArtistsAlbumTracksPageProps } from '../../App'
import Loading from '../components/Loading'
import ErrorCustomComponent from '../components/ErrorCustomComponent'
import HeaderScreenTitle from '../components/HeaderScreenTitle'
import { useArtistInfo } from '../hook/useArtistInfo'
import ArtistBio from '../components/ArtistBio'
import AlbumListItem from '../components/AlbumListItem'

const ArtistsAlbumTracks = ({ route }: ArtistsAlbumTracksPageProps) => {
  const { artistId } = route.params

  const { isArtistsAlbumFetching, albumData, isError } =
    useArtistAlbum(artistId)

  const { isArtistDataFetching, artistData, isGetArtistDataError } =
    useArtistInfo(artistId)
  if (isArtistsAlbumFetching || isArtistDataFetching) {
    return <Loading />
  }

  if (isError || isGetArtistDataError) {
    return <ErrorCustomComponent />
  }
  const { artist } = artistData
  const { bio, name, image } = artist
  return (
    <FlatList
      data={albumData?.topalbums?.album}
      ListHeaderComponent={
        <View
          style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <HeaderScreenTitle title={`${name} bio`} />
          <ArtistBio name={name} image={image[3]['#text']} bio={bio.content} />
          <HeaderScreenTitle title={`Albums`} />
        </View>
      }
      renderItem={({ item }) => (
        <AlbumListItem
          image={item.image}
          albumName={item.name}
          artistName={name}
          id={item.mbid}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ArtistsAlbumTracks
