import { StyleSheet,Dimensions } from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = (windowWidth) - 20 ;
  const imageHeight = (imageWidth / 9) * 16; 

    const st = StyleSheet.create({

       
        postInfo: {
            // paddingLeft:20,
            flexDirection: 'row',
            alignItems: 'center',
            // marginVertical: 10,
            // backgroundColor: theme.backgroundColor,
        },
        profileImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
        },
        authorDetails: {
            flex: 1,
            flexDirection: 'column'
        },
        username: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colorBlue1
        },
        
    });
    return st
}
export default styles