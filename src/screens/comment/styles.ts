import {Dimensions, StyleSheet} from 'react-native'
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;

    const st = StyleSheet.create({

        container: {
            // paddingHorizontal: 40,
            backgroundColor: theme.backgroundColor,
        },
        imagePicker: {

            // left: 5,
            width:'100%',
            height: windowWidth/9*16*0.5,
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingBottom:10,

        },
        imageAdd:{
            left: 5,
            // flexDirection: "column",
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        image: {

            width: '100%',
            height: undefined,
            resizeMode: 'contain',
            flex:1
        },
        removeButton: {
            position: 'absolute',
            top: 5,
            left: 5,
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

    });
    return st
}
export default styles