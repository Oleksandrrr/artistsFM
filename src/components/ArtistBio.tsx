import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import CollapsibleView from './CollapsibleView'

interface IProps {
  name: string
  image: string
  bio?: string
}
const ArtistBio = ({ image, bio }: IProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />

      <View>
        <CollapsibleView bio={bio}></CollapsibleView>
      </View>
    </View>
  )
}

export default ArtistBio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
})
