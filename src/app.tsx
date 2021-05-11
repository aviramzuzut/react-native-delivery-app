/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import { Tabs } from './navigation/tabs';
import { HeaderComponent } from './screens/header/header';
 import { HomepageScreen } from './screens/homepage/homepage';
import { Order } from './screens/order/order';
import { RestaurantMenu } from './screens/restaurant-menu/restaurant-menu';



 const Stack = createStackNavigator();

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'HomeScreen'}
        >
            <Stack.Screen name="HomeScreen" component={Tabs} />
            <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    </NavigationContainer>
)
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
