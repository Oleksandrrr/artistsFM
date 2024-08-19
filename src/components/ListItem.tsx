import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomImageComponent from './CustomImageComponent'
import ImageInterface from '../models/CustomImage'
import { StackNavigation } from '../navigation/Nav'

interface IProps {
  image: ImageInterface[]
  name: string
  id: string
}
const ListItem = ({ image, name, id }: IProps) => {
  const navigation = useNavigation<StackNavigation>()

  const handlePress = React.useCallback(
    () => navigation.navigate('ArtistsAlbumTracks', { artistId: id }),
    [navigation, id],
  )

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <CustomImageComponent images={image} />
      <Text style={styles.artistName} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default React.memo(ListItem)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 10,
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
