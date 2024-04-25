import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.backgroundColor
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
            borderRadius: 10,
            alignItems: 'center',
            margin: 10,
            padding: 10,
            width: 120,
            shadowColor: theme.shadowColor,
            shadowOffset: {
                width: 2,
                height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.65,
            elevation: 3,
            backgroundColor: theme.backgroundColor
        },
        placeImage: {
            width: 100,
            height: 100,
            borderRadius: 10,
        },
        placeName: {
            fontWeight: 'bold',
            flex: 1
            // color: "#fff"
        },
        placeStart: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        flatListContent: {
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        placesContainer: {
            // marginTop:10,
            // elevation:3
        }

    });
    return st
}
export default styles