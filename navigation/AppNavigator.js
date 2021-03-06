import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import AddCityScreen from '../screens/AddCityScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AppStack = createBottomTabNavigator({ Home: HomeScreen, Add: AddCityScreen, SignIn: IntroScreen });
const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));