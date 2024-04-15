import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBottomTabs from '../components/bottom/BottomTab';
import { NAVIGATION_TITLE } from '../constants/navigation';
import Home from '../screens/home';
import AddPost from '../screens/post';
import User from '../screens/user/info';
import ScheduleTrip from '../screens/schedule-trip';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Location from '../screens/location';
import PostDetail from '../screens/location/place';


const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={NAVIGATION_TITLE.LOGIN} screenOptions={{headerShown: false}}>
            <Stack.Screen name={NAVIGATION_TITLE.TAB} component={MyBottomTabs} />
            {/* <Stack.Screen name={NAVIGATION_TITLE.LOGIN} component={Login} />
            <Stack.Screen name={NAVIGATION_TITLE.REGISTER} component={Register} /> */}
            <Stack.Screen name={NAVIGATION_TITLE.HOME} component={Home} />
            <Stack.Screen name={NAVIGATION_TITLE.LOCATION} component={Location} />
            <Stack.Screen name={NAVIGATION_TITLE.ADD} component={AddPost} />
            <Stack.Screen name={NAVIGATION_TITLE.TRIP} component={ScheduleTrip} />
            <Stack.Screen name={NAVIGATION_TITLE.INFO_USER} component={User} />
            <Stack.Screen name={NAVIGATION_TITLE.POST_DETAIL} component={PostDetail} />


        </Stack.Navigator>
    );
}

export default Stack