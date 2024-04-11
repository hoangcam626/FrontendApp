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
      padding: 30,
      borderBottomColor: theme.borderBottomColor,
    },
    avatarContainer: {
      flexDirection: 'row',
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
      padding: 20,
      borderRadius: 10,
    },
    modalOption: {
      paddingVertical: 10,
      // borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
    modalOptionText: {
      fontSize: 18,
    },
    userName: {
      padding: 10,
      fontSize: 18,
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