import { Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useMemo, useState } from 'react'
import ImageInterface from '../models/CustomImage'

interface ImageProps {
  images: ImageInterface[]
}
const CustomImageComponent = ({ images }: ImageProps) => {
  const { width } = Dimensions.get('window')
  const [loading, setLoading] = useState(false)

  // Choose image size based on screen width
  const selectImageUrl = () => {
    let img = null
    if (width <= 320 && images && images.length > 0) {
      img = images.find(i => i.size === 'small')
    } else if (width <= 480) {
      img = images.find(i => i.size === 'medium')
    } else if (width <= 768) {
      img = images.find(i => i.size === 'large')
    } else if (width <= 1080) {
      img = images.find(i => i.size === 'extralarge')
    } else {
      img = images.find(i => i.size === 'mega')
    }
    return img ? img['#text'] : ''
  }
  const memorizedImage = useMemo(
    () => (
      <Image
        source={{ uri: selectImageUrl() }}
        style={styles.image}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onLoad={handleLoad}
      />
    ),
    [images],
  )

  const handleLoadStart = () => {
    setLoading(true)
  }

  const handleLoadEnd = () => {
    setLoading(false)
  }

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <>
      {loading && (
        <ActivityIndicator
          color="#008000"
          style={{ position: 'absolute', zIndex: 10, left: 35 }}
        />
      )}
      {memorizedImage}
    </>
  )
}

export default CustomImageComponent

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
})
