import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        image: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 9 / 16,
            resizeMode: 'cover',
        },
        searchBar: {
            position: 'absolute',
            top: '50%',
            width: '80%',
            backgroundColor: 'rgba(255,255,255,0.5)',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.6)',
            fontSize: 16,
            marginBottom: 20,
        },
    });
    return st
}
export default styles