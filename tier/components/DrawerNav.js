import React from 'react';
import {Dimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import DrawerContent from './DrawerContent';
import {styles} from './StyleSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default DrawerNav = (props) => {

    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }
            initialRouteName="Home"
            backBehavior="initialRoute"
            screenOptions={({ route, navigation }) => ({
                drawerStyle: {
                    width: Dimensions.get('window').width-50,
                },
                headerTitleAlign: "center",
                headerLeft: props => (
                    <Icon name="chevron-left" size={40} color={styles.BLACK_COLOR} onPress={() => {navigation.goBack()}}/>
                ),
            })}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Drawer.Screen name="Wallet" component={WalletScreen} />
        </Drawer.Navigator>
    );
};
