import {Dimensions, StyleSheet} from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const st = StyleSheet.create({
        
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor
        },
        
    });
    return st
}

export default styles;