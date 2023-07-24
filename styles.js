import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B5B6C',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: 50,
    right: 20
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
    height: 100,  // Height should be set depending on the height of the child components
    width: '100%',
  },
  personcircle: {
    width: 71,
    height: 71,
    borderRadius: 80,
    backgroundColor: 'white',
    marginLeft: 10,
    borderWidth: 2,
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
    top: 15,
    left: 130,
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
  }
});
