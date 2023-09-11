import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
 maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B5B6C',
  },
  bluecircle: {
    width: 15,
    height: 15,
    left: 25,
    bottom: 35,
    borderRadius: 7.5,
    backgroundColor: '#52707F',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    top: 7,
    left: 7,
  },
  personContainer: {
    flexDirection: 'row',
    top: 50,
    height: 100, 
    width: '100%',
  },
  personcircle: {
    width: 71,
    height: 71,
    borderRadius: 80,
    backgroundColor: 'white',
    marginLeft: 10,
    borderWidth: 2,
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
    width: 340,
    backgroundColor: '#5B5B6C',
    borderRadius: 50,
    alignSelf: 'center',
    zIndex: 1,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  shape: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 550,
    backgroundColor: '#F5F5F5',
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
    top: 105,
  },
  slidebar: {
    width: 104,
    height: 10,
    backgroundColor: '#5B5B6C',
    borderRadius: 50,
    top:'2%',
  },
  
  Icon: {
    width: 25,
    height: 25,
    marginBottom: 5
  },
  Text: {
    color: "white"
  },
  iconTextPair: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: "white"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5B5B6C',
  },
  kutucuk: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
    position: 'absolute', 
    top: 0,
    left: 0, 
    width: windowWidth, // Full width of the screen
    justifyContent: 'flex-start', // start items from the start of the screen
    zIndex: 1, // put the container on top of other elements
  },
  rick: {
    width: 50, 
    height: 50,
    resizeMode: 'contain', // changed from 'cover' to 'contain'
    marginLeft: 10, // added some left margin to ensure it stays at the left end
    zIndex: 1, // put the rick image on top of other elements
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 60, // Space between the logo and the text
    zIndex: 1, // put the logo text on top of other elements
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10, // Adjust this to set how far from the top the circle should be
    right: 10, // Adjust this to set how far from the right the circle should be
    zIndex: 1, // put the circle on top of other elements
  },
  userImageWithBorder: {
    width: 60, 
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 15,
},

userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 2,
},

lastMessage: {
    fontSize: 14,
    color: 'black',
    marginRight: 10,
},

profileDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 1,
},


 
});