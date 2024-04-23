import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const st = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        topModal: {
            flexDirection: "row",
            flexWrap:'wrap'
        },
        iconBack:{
            width:windowWidth,
            position: 'absolute',
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        gradient: {
            ...StyleSheet.absoluteFillObject,
        },

        button: {
            backgroundColor: theme.tabActive,
            margin: 20,
            padding: 10,
            borderRadius: 5
        },
        buttonText: {
            textAlign: 'center',
            color: "#fff",
            fontSize: 16,
            fontWeight: 'bold'
        },
        imageContainer: {
            width: '100%',
            height: windowWidth / 16 * 9,
        },

        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        schedule: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        detail: {
            paddingBottom:10,
            backgroundColor:theme.colorBlue1,
            width:'100%',
            paddingLeft:20
        },
        text: {
            paddingTop:5,
            color:'#fff'
        }
    });
    return st
}
export default styles