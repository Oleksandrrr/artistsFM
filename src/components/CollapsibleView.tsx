import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Collapsible from 'react-native-collapsible'

interface IProps {
  bio?: string
}
const CollapsibleView = ({ bio }: IProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleExpanded = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded} style={styles.button}>
        <Text>{isCollapsed ? 'Show Bio' : 'Show Less'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View>
          <Text>{bio}</Text>
        </View>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
})
export default CollapsibleView
