import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import DrawerNav from './components/DrawerNav';

export default App = () => {

    console.log("Main App Component Loaded!!!");

    return (
        <NavigationContainer>
            <DrawerNav/>
        </NavigationContainer>
    );
};