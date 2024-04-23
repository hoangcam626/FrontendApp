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
            backgroundColor: 'rgba(255,255,255,0.9)',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: theme.tabActive,
            fontSize: 16,
            color: theme.colorBlue1,
            marginBottom: 20,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginBottom: 10,
        },
        placeItem: {
            marginRight: 10,
        },
        placeImage: {
            width: 100,
            height: 100,
            borderRadius: 10,
        },
        placeName: {
            fontWeight: 'bold',
        },
        placeAddress: {
            color: 'gray',
        },
        flatListContent: {
            paddingHorizontal: 10,
            paddingVertical: 20,
        },

    });
    return st
}
export default styles