import { FlatList, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TracksScreenPageProps } from '../../App'
import { useAlbumTracks } from '../hook/useAlbumTracks'
import Loading from '../components/Loading'
import ErrorCustomComponent from '../components/ErrorCustomComponent'
import HeaderScreenTitle from '../components/HeaderScreenTitle'

const TracksScreen = ({ route }: TracksScreenPageProps) => {
  const { artistName, albumName } = route.params
  const { isTracksFetching, albumTracks, isGetAlbumTracksError } =
    useAlbumTracks(artistName, albumName)

  if (isTracksFetching) {
    return <Loading />
  }

  if (isGetAlbumTracksError) {
    return <ErrorCustomComponent />
  }
  return (
    <FlatList
      data={albumTracks?.album?.tracks?.track}
      ListHeaderComponent={
        <HeaderScreenTitle title={`${albumTracks.album.name} `} />
      }
      renderItem={({ item }) => (
        <Text style={styles.songName}>{item.name}</Text>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}
const styles = StyleSheet.create({
  songName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 2,
    textAlign: 'left',
    padding: 6,
    backgroundColor: 'lightgrey',
    borderRadius: 16,
  },
})

export default TracksScreen
