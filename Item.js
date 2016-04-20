import React, { Component, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props)
  }
  goback() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const { color, pageText, navigator } = this.props;
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{ pageText }</Text>
        <Text style={styles.tabText}>re-renders of the {pageText}</Text>
        <TouchableHighlight onPress = { () => this.goback() }>
          <Text>返回主页</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
