import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../App'
import CustomImageComponent from './CustomImageComponent'
import ImageInterface from '../models/CustomImage'

interface IProps {
  image: ImageInterface[]
  artistName: string
  albumName: string
  id: string
}
const AlbumListItem = ({ image, albumName, artistName }: IProps) => {
  const navigation = useNavigation<StackNavigation>()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('TracksScreen', { artistName, albumName })
      }>
      <CustomImageComponent images={image} />
      <Text style={styles.artistName} numberOfLines={1}>
        {albumName}
      </Text>
    </TouchableOpacity>
  )
}

export default React.memo(AlbumListItem)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    margin: 5,
    borderRadius: 12,
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  artistName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
})
