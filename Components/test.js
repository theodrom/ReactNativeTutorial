import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Test extends Component {
  render() {
    return (
      <View>
        <Text> This is a test props for {this.props.name}. </Text>
      </View>
    )
  }
}

export default Test

