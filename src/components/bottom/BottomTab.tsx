import React, {useCallback} from "react"
import {Image, View} from "react-native"
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {TabsData} from "./tab"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NAVIGATION_TITLE} from "../../constants/navigation";
// import ClassifyTopTab from "./TopTab";
import useTheme from "../../hooks/useTheme";
import Home from "../../screens/home";
import AddPost from "../../screens/post/add";
import User from "../../screens/user/info";
import ScheduleTrip from "../../screens/scheduletrip";
import Location from "../../screens/location";
import PostDetail from "../../screens/post/detail";
import {getItemObjectAsyncStorage} from "../../../utils/asyncStorage";
import {KEY_STORAGE} from "../../constants/storage";
import VisitCalendar from "../../screens/calendar";

const MyBottomTabs = () => {

        const Tab = createBottomTabNavigator()

        const onTabPress = useCallback((e, navigation, route) => {
            e?.preventDefault()
            navigation.navigate(route?.name)
        }, [])

        const getTabBarVisibility = useCallback((route: object) => {
            return {display: 'flex'};
        }, []);

        const getOptions = useCallback(
            props => ({
                tabBarIcon: data => <TabBar props={{...data, tabName: props?.route?.name}}/>,
                tabBarStyle: getTabBarVisibility(props?.route) as any,
            }),
            [getTabBarVisibility],
        );

        const TabBar = ({props}: any) => {
            const {focused, tabName} = props
            const tab = TabsData.filter(item => item?.name === tabName)[0]
            const getColor = useCallback(() => {
                if (focused) return useTheme().tabActive
                else return useTheme().tabColor
            }, [focused])
            if (tabName === NAVIGATION_TITLE.HOME)
                return (
                    <Image
                        source={tab?.icon}
                        style={{height: 30, width: 30}}
                        resizeMode="contain"
                    />
                )
            else if (tabName === NAVIGATION_TITLE.INFO_USER)
                return (
                    <Image
                        source={tab?.icon}
                        style={{tintColor: getColor(), height: 30, width: 25}}
                        resizeMode="contain"
                    />
                )
            else
                return (
                    <Image
                        source={tab?.icon}
                        style={{tintColor: getColor(), height: 30, width: 30}}
                        resizeMode="contain"
                    />
                )
        }

        return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: useTheme().backgroundColor
                    },
                }}
            >
                <Tab.Screen
                    name={NAVIGATION_TITLE.HOME}
                    component={Home}
                    options={getOptions}
                />
                <Tab.Screen
                    name={NAVIGATION_TITLE.LOCATION}
                    component={Location}
                    options={getOptions}
                />
                <Tab.Screen
                    name={NAVIGATION_TITLE.ADD}
                    component={AddPost}
                    options={getOptions}
                />
                <Tab.Screen
                    name={NAVIGATION_TITLE.TRIP}
                    component={ScheduleTrip}
                    options={getOptions}
                />
                <Tab.Screen
                    name={NAVIGATION_TITLE.INFO_USER}
                    component={User}
                    options={getOptions}
                />

            </Tab.Navigator>
        )
    }
;

export default MyBottomTabs