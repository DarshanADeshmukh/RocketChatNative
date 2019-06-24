import React,{Component} from 'react';
import {Platform, Button, Text,View,StyleSheet,Linking,StackActions,NavigationActions} from 'react-native';
import rocketChatUrl from './rocketChatUrl';

class Home extends Component{

static navigationOptions = {
  title:'Home',
};

  render(){

    return(
      <View style = {styles.container}>
      <Button title = "Rocket Chat" onPress = {() =>
          this.props.navigation.navigate('RocketChat')
      }></Button>
      </View>
    );
  }
  navigateToChat = () =>{
    Linking.openURL(rocketChatUrl);
  }
}

export default Home;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
  },
  button:{
    alignItems:'center'
  }
});
