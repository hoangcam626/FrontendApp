import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;

    const st = StyleSheet.create({

        container: {
            flex: 1,
            // justifyContent: 'center',
            // paddingHorizontal: 40,
            backgroundColor: theme.backgroundColor,
        },
        label:{
          fontWeight:'bold',
          color: theme.tabActive,
          fontSize: 18,
          textAlign: 'center'
        },
        button: {
            backgroundColor: theme.tabActive,
            margin: 20,
            padding: 10,
            borderRadius: 5,

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
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,

        },

        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius:5
        },
        schedule: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        scheduleItem: {
            margin: 20,
            // borderBottomWidth:1,
            paddingBottom:10,
            borderBottomColor:"#ccc",
        },
        nameSchedule: {
            paddingTop:5,
            fontSize: 18,
            fontWeight: 'bold',
            flex: 1,
        },
        iconBack:{
            paddingTop:5,
            // width:windowWidth,
            // position: 'absolute',
            // zIndex: 1,
            // flexDirection: 'row',
            // justifyContent: 'space-between'
        },
        time:{
            flex: 1,
            color: theme.colorBlue1,
            fontWeight:'bold'
        }
    });
    return st
}
export default styles