import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;

    const st = StyleSheet.create({

        container: {
            // paddingHorizontal: 40,
            backgroundColor: theme.backgroundColor,
        },
        detailContainer:{
          marginLeft:20
        },
        detail: {
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold'
        }

    });
    return st
}
export default styles