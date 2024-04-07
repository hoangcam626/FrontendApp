import { View, Text, StatusBar, Image, TouchableOpacity, Alert, Modal, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import { useDispatch } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { BASE_URL } from '../../../constants/api'
import Loading from '../../../../utils/loading/Loading'

const InfoUser = () => {

    const styles = st();
    const navigation = useNavigation<any>()
    const [isLoading, setLoading] = useState(false)
   

    return (
        <View style={styles.container}>
            <StatusBar />
    
            <Loading visiable={isLoading} />
        </View>
    )
}

export default InfoUser