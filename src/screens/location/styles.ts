
import { StyleSheet, Dimensions } from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = (windowWidth / 2) - 15;
  const imageHeight = (imageWidth / 9) * 16;
  const theme = useTheme();

  const st = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 40,
      backgroundColor: theme.backgroundColor,
    },
    flatListContainer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    postContainer: {
      // flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: 5,
      borderRadius: 10,
      overflow: 'hidden',
    },
    postImage: {
      width:imageWidth,
      height:imageHeight,
      aspectRatio: 1,
    },
    locationText: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      // backgroundColor: theme.tabActive,
      // opacity:75,
    
      padding: 5,
      borderRadius: 3,
    },

    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.tabActive,
      // borderRadius: 10,
      marginBottom: 10,
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      marginRight: 10,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    searchButton: {
      // backgroundColor: 'white',
      // borderRadius: 20,
      padding: 10,
      color: 'white',
      fontWeight: 'bold',
    },
  });
  return st
}
export default styles