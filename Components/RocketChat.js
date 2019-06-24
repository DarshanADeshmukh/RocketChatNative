import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {WebView} from 'react-native';
import {rocketChatUrl} from './rocketChatUrl.js'
class RocketChat extends Component{
  render(){
    return(
      <WebView
        source={{uri:rocketChatUrl}}
        style={{marginTop: 20}}
      />
    )
  }
}
export default RocketChat;
