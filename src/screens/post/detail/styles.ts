import {StyleSheet, Dimensions} from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = (windowWidth) - 20;
    const imageHeight = (imageWidth / 9) * 16;

    const st = StyleSheet.create({

        container: {
            // flex: 1,
            // justifyContent: 'center',
            // paddingHorizontal: 40,
            paddingTop: 40,
            // alignItems: 'center',
            backgroundColor: theme.backgroundColor,

        },
        imageContainer: {
            // alignItems: 'center',
            // width: '90%',
            // backgroundColor: "#FFF6F6",
            elevation: 5
        },
        image: {
            // position: 'absolute',
            width: imageWidth,
            height: imageHeight,
            // aspectRatio: 1, 
            alignSelf: 'center',
            // aspectRatio: 'auto',
            borderRadius: 10,
            margin: 20,
            // backgroundColor: theme.backgroundType,

        },

        // postInfo: {
        //     paddingLeft:20,
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     marginVertical: 10,
        //     backgroundColor: theme.backgroundColor,
        // },
        // profileImage: {
        //     width: 50,
        //     height: 50,
        //     borderRadius: 25,
        //     marginRight: 10,
        // },
        // authorDetails: {
        //     flex: 1,
        // },
        // username: {
        //     fontSize: 16,
        //     fontWeight: 'bold',
        // },
        stats: {
            // textAlign: 'right',
            // borderTopColor: '#ccc',
            // borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 10,
            fontSize: 14,
            color: 'gray',
            // marginVertical: 10,
            // marginHorizontal: 20,
        },
        detailsContainer: {
            flexDirection: 'row',
            backgroundColor: theme.backgroundColor,
            alignItems: 'center',
            width: windowWidth,
            borderRadius: 10,
        },
        details: {
            fontSize: 14,
            color: 'gray',
            marginVertical: 10,
            marginHorizontal: 20,
            textAlign: 'left',
            flex: 1
        },
        heart: {
            marginVertical: 10,
            paddingRight: 20,
        },

        description: {
            paddingLeft: 20,
            marginHorizontal: 20,
            borderTopColor: 'gray',
            borderTopWidth: 1,
            // textAlign: 'center',
            marginTop: 10,
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
        postInfo: {
            // paddingLeft:20,
            flexDirection: 'row',
            alignItems: 'center',
            // marginVertical: 10,
            // backgroundColor: theme.backgroundColor,
        },
        profileImage: {
            width: 30,
            height: 30,
            borderRadius: 25,
            marginRight: 10,
        },
        authorDetails: {
            backgroundColor: "#EEEEEE",
            padding: 10,
            borderRadius: 15,
            flex: 1,
            flexDirection: 'column'
        },
        username: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        iconBack:{
            width: Dimensions.get('window').width,
            position: 'absolute',
            zIndex: 1,
        },

    });
    return st
}
export default styles