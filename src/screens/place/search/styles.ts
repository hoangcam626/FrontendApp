import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const st = StyleSheet.create({
        container: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            alignItems: 'center',
            justifyContent: 'center'
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
            margin: 10,
            borderWidth:1
        },
        input: {
            flex: 1,
            height: 40,
            paddingHorizontal: 10,
            marginRight: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
        },
        searchButton: {
            // backgroundColor: 'white',
            // borderRadius: 20,
            padding: 10,
            color: '#000',
            fontWeight: 'bold',
        },
        imageContainer: {
            // backgroundColor: 'rgba(0,0,0,0.9)',

            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },

        image: {
            width: '100%',
            height: undefined,
            flex: 1,
            resizeMode: 'contain'
        },

        iconBack: {
            top: 10,
            width: Dimensions.get('window').width,
            position: 'absolute',
            zIndex: 1,
        },
        // modalContent: {
        //     backgroundColor: 'white',
        //     borderRadius: 10,
        //     height:"50%",
        //     alignSelf: 'center',
        //     margin: 10
        // },
        button: {
            backgroundColor: theme.tabActive,
            margin: 10,
            padding: 10,
            borderRadius: 5
        },
        buttonText: {
            textAlign: 'center',
            color: "#fff",
            fontSize: 16,
            fontWeight: 'bold'

        },
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            backgroundColor: 'white',
            width: '100%',
            height: '50%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
        },

    });
    return st
}

export default styles;