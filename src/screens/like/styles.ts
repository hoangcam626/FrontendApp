
import { StyleSheet, Dimensions } from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = (windowWidth / 2) - 15;
    const imageHeight = (imageWidth / 3) * 4;
    const theme = useTheme();

    const st = StyleSheet.create({

        // container: {
        //     flex: 1,
        //     justifyContent: 'center',
        //     paddingTop: 40,
        //     backgroundColor: theme.backgroundColor,
        // },

    });
    return st
}
export default styles