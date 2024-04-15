import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
  const theme = useTheme();

  const st = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      // paddingHorizontal: 40,
      backgroundColor: theme.backgroundColor,
    },
  });
  return st
}
export default styles