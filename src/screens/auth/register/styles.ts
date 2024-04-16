import { StyleSheet } from 'react-native'
import useTheme from '../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 40,
            backgroundColor: "#E1F7F5",
        },
        logo: {
            height: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 10,
        },
        title: {
            color: theme.titleColor,
            fontSize: 40,
            fontWeight: '800',
            marginBottom: 3,
            textAlign: 'center',
        },
        slogan: {
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 15,
            color: theme.text_1,
        },
        error: {
            color: theme.text_err,
            textAlign: 'center',
            marginTop: 20,
            fontStyle: 'italic',
            fontSize: 13,
        },
        inputLabel: {
            fontSize: 15,
            marginTop: 20,
            marginBottom: 10,
            fontWeight: '500',
            color: theme.text_1,
        },
        input: {
            color: theme.text_1,
            fontSize: 14,
            paddingHorizontal: 20,
            borderRadius: 30,
            height: 50,
            overflow: 'hidden',
            backgroundColor: theme.backgroundColor,
        },
        formItem: {
            borderRadius: 30,
            borderWidth: 1,
            borderColor: theme.flatListItem,
            backgroundColor: theme.backgroundColor,
            justifyContent: 'center',
            shadowColor: theme.shadowColor,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,
            elevation: 1,
        },
        formBtn: {
            backgroundColor: theme.tabActive,
            height: 50,
            borderRadius: 5,
            marginTop: 30,
        },
        textBtn: {
            textAlign: 'center',
            color: theme.text_white,
            fontWeight: '500',
            fontSize: 15,
        },
        register: {
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'center',
        },
        registerText: {
            color: theme.text_1,
        },
        registerLink: {
            fontWeight: '500',
            color: theme.text_err,
        },
        bg: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            resizeMode: 'cover',
            zIndex: -10,
            opacity: 0.15,
        }
    })
    return st

}

export default styles;