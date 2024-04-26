import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const st = StyleSheet.create({
        
        container: {
            flex: 1,
            // backgroundColor: theme.backgroundColor,
            marginBottom:60
        },
        gridContainer: {
            // height:100,
            flexDirection: 'row',
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius:5,
            // padding: 10,
            borderColor: "#ccc",
            paddingTop: 10,
            // paddingVertical: 20,
        },
        itemContainer:{
            margin:10,
            padding:20,
            elevation:5,
            backgroundColor:theme.backgroundColor
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
        },
        username: {

            color:'gray',
            flex:1
        },
        ratingContainer: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        star: {
            // width: 20,
            // height: 20,
            marginRight: 10,
        },
        description: {
            // paddingLeft:10
            // marginBottom: 5,
        },
        imageContainer: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        image: {
            width: 100,
            height: 100,
            marginRight: 5,
        },

    });
    return st
}

export default styles;