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
    avatar: {
      padding: 20,
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
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