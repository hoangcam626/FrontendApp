import { StyleSheet } from 'react-native'
import useTheme from '../../../hooks/useTheme'
const styles = () => {
  const theme = useTheme();

  const st = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      // paddingHorizontal: 40,
      backgroundColor: theme.backgroundColor,
    },
    userInfo: {
      // flexDirection: 'row',
      alignItems: 'center',
      // padding: 30,
      borderBottomColor: theme.borderBottomColor,
    },
    avatarContainer: {
      // flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      marginLeft: 5,
    },
    avatar: {
      // padding: 100,
      marginTop:30,
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 10,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      width:275,
      alignSelf:'center'
    },
    modalOption: {
      flexDirection: 'row',

      borderBottomColor: 'lightgray',
    
    },
    modalOptionText: {
      // flexDirection: 'row',
      textAlignVertical:'center',
      padding: 10,
      fontSize: 18,
      // fontWeight:'bold',
      color: theme.tabActive
    },
    modalCancel:{
      padding:5,
      fontSize: 18,
      color: '#fff',
      textAlign : 'center',
      backgroundColor: theme.tabActive,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomColor: 'lightgray',


    },
    userName: {
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    scene: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabIcon: {
      color: theme.tabActive,
      // inactiveColor: theme.tabColor
    }
  });
  return st
}
export default styles