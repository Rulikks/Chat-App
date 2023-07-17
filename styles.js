import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B5B6C',
  },
    circle: {
      position: 'absolute',
      right: 20,
      top: 45,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    bluecircle: {
        width: 15,
        height: 15,
        left: 25,
        bottom:35,
        borderRadius: 7.5,
        backgroundColor: '#52707F',
    },
    notificationIcon: {
        width: 24,
        height: 24,
        top:7,
        left:7,
    },
    personContainer: {
        flexDirection: 'row',
        top:50,
        height: 100,  // Height should be set depending on the height of the child components
        width: '100%',
    },
    personcircle: {
      width: 71,
      height: 71,
      borderRadius: 80,
      backgroundColor: 'white',
      marginLeft: 10,
      borderWidth:2,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
    plus: {
        width: 50,
        height: 50,
        bottom: 5,
    },
    UserControlBar: {
      position: 'absolute',
      bottom: 0,
      width: 323,
      height: 389,
      backgroundColor: 'black',
      borderRadius: 50,
      alignSelf: 'center',
    },
    shape: {
      width: 375 ,
      height: 550,
      backgroundColor: '#F5F5F5',
      borderTopEndRadius:60,
      borderTopStartRadius:60,
      top:105,
  },
    slidebar: {
      width: 104,
      height: 10,
      backgroundColor: '#5B5B6C',
      borderRadius: 50,
      top: 15,
      left: 130,
    },
   
    
});
