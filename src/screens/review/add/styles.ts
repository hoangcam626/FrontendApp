import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const st = StyleSheet.create({
        modalContainer: {
            paddingHorizontal: 20,
            marginVertical: 10,
        },
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor
        },
        iconBack: {
            paddingLeft: 20,
            // color: theme.tabActive
        },

        title: {
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1,
            textAlign: 'center',
            marginRight: 20,
            // color:theme.tabActive
        },
        topModal: {
            flexDirection: "row",
            width: windowWidth,
            borderColor: "#ccc",
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 40,
            // backgroundColor:"#EBF2FA"
        },


        placeName: {
            fontSize: 18,
            marginBottom: 20,
            fontWeight: 'bold',
            color: theme.colorBlue1
        },
        icon: {
            paddingLeft: 20,
            // size =
        },

        imageContainer: {
            marginRight: 10,
        },
        image: {
            width: 150,
            height: 150,
            borderRadius: 10,
        },
        removeButton: {
            position: 'absolute',
            top: 5,
            right: 5,
            backgroundColor: 'red',
            width: 20,
            height: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        removeButtonText: {
            color: 'white',
        },
        titleInput: {
            paddingTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            paddingBottom: 10,
        },
        descriptionInput: {
            borderStyle: 'dashed',
            width: '100%',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 10,
            // marginBottom: 0,
        },
        camera: {
            width: '100%',
            padding: 10,
            marginRight: 20,
        },
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
        flatListContainer: {
            paddingVertical: 20,
            paddingHorizontal: 10,
        },

    });
    return st
}

export default styles;