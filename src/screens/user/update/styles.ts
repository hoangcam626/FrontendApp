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
        imagePicker: {
            width: '100%',
            height: windowWidth / 16 * 9,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,

        },
        imageAdd: {
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        titleInput: {
            fontSize: 16,
            fontWeight: 'bold',
            // paddingBottom: 3,
            color: "#064789"
        },
        descriptionInput: {
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#ccc',
            padding: 5,
            marginBottom: 10,
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
        avatarContainer: {
            // flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            // padding: 100,
            marginTop: 30,
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 10,

        },
        note:{
            padding:20,
            // textAlign:'center',
            color:'red'
        }
    });
    return st
}
export default styles