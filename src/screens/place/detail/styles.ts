import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const st = StyleSheet.create({

        container: {
            flex: 1,
            // alignItems:'center',
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
        // tabView: {
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     zIndex: 1, // Đảm bảo tab view nằm trên cùng
        // },

        button: {
            margin: 10,
            padding: 10,
            marginBottom: 100
        },
        buttonText: {
            // textAlign: 'center',
            color: "rgba(0, 0, 0, 0.7)",
            fontSize: 16,
            fontWeight: 'bold'
        },
        imageContainer: {
            width: '100%',
            height: windowWidth / 16 * 7,
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
            padding:10,
            // backgroundColor:theme.colorBlue1,
            width:'100%',
            // paddingLeft:10
        },
        text: {
            // paddingTop:5,
            // color:theme.colorBlue1,
            fontSize: 12,
        },
        function:{
            position: 'absolute',
            flexDirection:"row",
            backgroundColor: theme.backgroundColor,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 10,
            left: 23,
            margin:10,
            padding: 10,
            shadowColor: theme.colorBlue1,
            shadowOffset: {
                width: 20,
                height: 20,
            },
            shadowOpacity: 0.8,
            // shadowRadius: 4.65,
            elevation: 5,
        },
        functionItem:{
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20
        },
        functionText:{
            color:theme.colorBlue1,
            fontSize: 10,
            fontWeight:'bold',
        },
        iconFunction:{
            shadowColor: "#fff",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,
            elevation: 1,
        }
    });
    return st
}
export default styles