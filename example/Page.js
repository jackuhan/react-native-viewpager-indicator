import React, { Component, PropTypes } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';



class Page extends Component {


  render () {
    return  <View style={styles.container} >
      <Text style={styles.welcome}>
        {"classify="+this.props.classify}
      </Text>
      <Text style={styles.instructions}>
        To get started, edit appDemo.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Page;
