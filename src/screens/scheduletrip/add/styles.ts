import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const st = StyleSheet.create({

    modalContainer: {
      paddingHorizontal: 20,
      marginVertical:10,
    },
    container: {
      flex: 1,
      // paddingHorizontal: 20,
      paddingTop:35,
      // marginVertical:10,
      backgroundColor: theme.backgroundColor
    },
    icon:{
      paddingLeft:20,
      // size =
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      flex:1,
      textAlign:'center',
      marginRight: 20
    },
    topModal:{
      flexDirection: "row",
      width: windowWidth,
      borderColor:"#ccc",
      borderBottomWidth:1,
      alignItems: 'center',
      height: 40,
    },
    imagePicker: {
      width:'100%',
      height: windowWidth/9*16*0.5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:10,

    },
    imageAdd:{
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '50%',
      height: '100%',
      resizeMode: 'cover',
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
  });
  return st
}
export default styles