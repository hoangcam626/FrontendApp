import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const SLIDER_WIDTH = Dimensions.get('window').width
    const SLIDER_HEIGHT = SLIDER_WIDTH * 0.45
    const st = StyleSheet.create({
        container: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            height: Dimensions.get('window').height * 0.4,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
        },
        image: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 9 / 16,
            resizeMode: 'cover',
        },
        searchBar: {
            position: 'absolute',
            // top: '50%',
            width: '80%',
            backgroundColor: 'rgb(0,0,0,5)',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: '#ccc',
            fontSize: 16,
            marginBottom: 20,
            // opacity:'50%'
        },
    });
    return {st, SLIDER_HEIGHT, SLIDER_WIDTH}
}
export default styles