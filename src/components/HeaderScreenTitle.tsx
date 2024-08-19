import { StyleSheet, Text } from 'react-native'
import React from 'react'

interface IProps {
  title: string
}
const HeaderScreenTitle = ({ title = '' }: IProps) => {
  return <Text style={styles.title}> {title}</Text>
}

export default HeaderScreenTitle

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    textAlign: 'center',
  },
})
