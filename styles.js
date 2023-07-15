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
        left: 140,
        bottom: 250,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'relative',
      },
      bluecircle: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#52707F',
        position: 'absolute',
        left: 0,
        top: 0,
      },
      notificationIcon: {
        position: 'absolute',
        width: 24,
        height: 24,
        left: 8,
        top: 8,
      },
      personContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      personcircle: {
        width: 71,
        height: 71,
        borderRadius: 80,
        backgroundColor: 'white',
        marginLeft: 10,
        position: 'relative',
        bottom: 210,
        right: 15,
      },
      plus: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 10,
        bottom: 15,
        top: 10,
      },
      
      shape: {
        width: 375 ,
        height: 450,
        backgroundColor: '#F5F5F5',
        borderTopEndRadius:60,
        borderTopStartRadius:60,
        position: 'absolute',
        bottom: 0,
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
