import { FlatList, View } from 'react-native'
import React from 'react'
import { useFavoriteArtistsInfo } from '../hook/useFavoriteArtistsInfo'
import Loading from '../components/Loading'
import ErrorCustomComponent from '../components/ErrorCustomComponent'
import ListItem from '../components/ListItem'
import HeaderScreenTitle from '../components/HeaderScreenTitle'

const HomeScreen = () => {
  const { isGettingFavoriteArtists, artistsData, isError } =
    useFavoriteArtistsInfo()

  if (isGettingFavoriteArtists) {
    return <Loading />
  }

  if (isError) {
    return <ErrorCustomComponent />
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={artistsData?.topartists?.artist}
        ListHeaderComponent={<HeaderScreenTitle title="Favorite Artists" />}
        renderItem={({ item }) => (
          <ListItem image={item.image} name={item.name} id={item.mbid} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
