import { StyleSheet, Dimensions } from 'react-native';
import { green, appgreen, grey, white, black } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    elevation: 5,
    marginTop: -100,
    marginBottom: 0,
    height: 140
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 26,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 10,
    marginLeft: 25,
    color: green
  },
  description: {
    marginTop: 15,
    marginLeft: 25,
    marginRight: 30,
    marginBottom: 20
  },
  title: {
    fontSize: 16,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    marginLeft: 10
  },
  openingTitle: {
    marginLeft: 25
  },
  opening: {
    minHeight: Dimensions.get('window').height / 2 - 100,
    marginLeft: 25,
    marginBottom: 10
  },
  icons: {
    flexDirection: 'row',
    backgroundColor: appgreen,
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    elevation: 3
  },
  iconwrapper: {
    width: 57
  },
  icon: {
    fontSize: 21,
    color: grey,
    textAlign: 'center',
    elevation: 7
  },
  icontext: {
    color: grey,
    fontSize: 10,
    textAlign: 'center'
  },
  textarea: {
    backgroundColor: white
  },
  backIcon: {
    marginLeft: 7,
    marginTop: 6,
    zIndex: 999,
    width: 20
  },
  scrollContainer: {
    height: 200
  },
  image: {
    height: 200
  },
  topBar: {
    height: 35,
    backgroundColor: appgreen
  },
  topBarText: {
    fontWeight: 'bold',
    bottom: 18,
    fontSize: 14,
    color: white,
    textAlign: 'center'
  },
  loading: {
    color: green
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: black,
    opacity: 0.6
  }
});
