import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, KeyboardAvoidingView, Platform } from 'react-native';
import st from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../constants/navigation';
import { useDispatch } from 'react-redux';
import { registerActions } from '../../../services/auth/actions';
import Loading from '../../../../utils/loading/Loading';

// import { validateEmail, validatePassword, validatePhone } from '../../../../utils/validate';

const Register = () => {
  const [account, setAccount] = useState({
    username: '',
    // phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigation = useNavigation<any>()
  const dispatch = useDispatch<any>()
  const styles = st();
  const [loading, setLoading] = useState<boolean>(false)


  const handleChangeAccount = (textInputName) => {
    return (value: any) => {
      setAccount({ ...account, [textInputName]: value });
    };
  };

  const showToast = () => {
    ToastAndroid.show(
      'Đăng ký thành công!',
      ToastAndroid.LONG,
    );
  };

  const handleRegister = async () => {
    if (!account.username || !account.email || !account.password || !account.confirmPassword) {
      ToastAndroid.show('Vui lòng điền đủ thông tin!', ToastAndroid.SHORT)
    }
    else if (account.password !== account.confirmPassword) {
      ToastAndroid.show('Nhập khẩu nhập lại sai!', ToastAndroid.SHORT)
    }
    // else if (validatePhone(account.phone)) {
    //   ToastAndroid.show('Xem lại số điện thoại!', ToastAndroid.SHORT)
    // }
    // else if (validatePassword(account.password)) {
    //   ToastAndroid.show('Mật khẩu dài tối thiểu 8 ký tự!', ToastAndroid.SHORT)
    // }
    else {
      setLoading(true)

      var req = new FormData()
      req.append('username', account?.username)
      req.append('email', account?.email)
      req.append('password', account?.password)

      dispatch(registerActions(req)).then(res => {
        setLoading(false)
        if (res.payload) {
          showToast()
          navigation.navigate(NAVIGATION_TITLE.LOGIN);
          setAccount({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
          });
        }
        else {
          ToastAndroid.show('Đăng ký không thành công!', ToastAndroid.SHORT)
        }
      })
        .catch(err => ToastAndroid.show('Đăng ký không thành công!', ToastAndroid.SHORT))
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/images/tabs/vietnam.png')}
      />
      <Text style={styles.slogan}>VIỆT NAM</Text>
      <Text style={styles.inputLabel}>Username: </Text>
      <View style={styles.formItem}>
        <TextInput
          style={styles.input}
          value={account.username}
          onChangeText={handleChangeAccount('username')}
          placeholder='Nhập tên'
        />
      </View>
      <Text style={styles.inputLabel}>Email: </Text>
      <View style={styles.formItem}>
        <TextInput
          style={styles.input}
          value={account.email}
          onChangeText={handleChangeAccount('email')}
          placeholder='Nhập email'
          keyboardType='email-address'
        />
      </View>
      <Text style={styles.inputLabel}>Mật khẩu:</Text>
      <View style={styles.formItem}>
        <TextInput
          style={styles.input}
          value={account.password}
          onChangeText={handleChangeAccount('password')}
          placeholder="Nhập mật khẩu"
          secureTextEntry
        />
      </View>
      <Text style={styles.inputLabel}>Nhập lại mật khẩu:</Text>
      <View style={styles.formItem}>
        <TextInput
          style={styles.input}
          value={account.confirmPassword}
          onChangeText={handleChangeAccount('confirmPassword')}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={[styles.formItem, styles.formBtn]}>
        <Text style={styles.textBtn}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={styles.registerText}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION_TITLE.LOGIN) }}>
          <Text style={[styles.registerText, styles.registerLink]}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      {/* <Image
        style={styles.bg}
        source={require('../../../../assets/images/tabs/vietnam.png')}
      /> */}
      <Loading visiable={loading} />
    </KeyboardAvoidingView>
  );
};

export default Register;
