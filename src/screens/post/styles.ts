import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width;

  const st = StyleSheet.create({

    modalContainer: {
      // backgroundColor: 'gray',
      // height: '80%',
      paddingTop:35,
      paddingHorizontal: 20,
      marginVertical:10,
      flex: 1,

    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop:35,
      marginVertical:10,
      // justifyContent: 'center',
      // alignItems: 'center',
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
      textAlign:'center'
    },
    topModal:{
      flexDirection: "row",
      width: windowWidth,
      // borderRadius:10,
      alignItems: 'center',

    },
    imagePicker: {
      width:'100%',
      height: windowWidth/9*16*0.5,
      // backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
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
    descriptionInput: {
      width: '100%',
      height: 100,
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