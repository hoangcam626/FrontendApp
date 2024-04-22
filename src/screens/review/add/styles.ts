import { Dimensions, StyleSheet } from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const st = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    placeName: {
      fontSize: 18,
      marginBottom: 20,
    },
    icon: {
      paddingLeft: 20,
      // size =
    },

    topModal: {
      flexDirection: "row",
      width: windowWidth,
      borderColor: "#ccc",
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 40,
    },
    titleInput:{
      fontSize: 16,
      fontWeight:'bold',
      paddingBottom:10,
    },
    descriptionInput: {
      width: '100%',
      // height: 100,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
  }
  );
  return st
}

export default styles;