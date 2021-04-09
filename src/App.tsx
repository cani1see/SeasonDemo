import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {HomeScreen} from './Screens/HomeScreen';
import {DetailScreen} from './Screens/DetailScreen';
import {
  icon_back,
  icon_cart,
  icon_menu,
  icon_notification,
  icon_search,
} from './constants/icons';
import {img_logo} from './constants/images';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'seasons',
              headerTitleAlign: 'center',
              headerTitle: () => (
                <View style={{width: 100, height: 40, backgroundColor: 'cyan'}}>
                  <Image source={img_logo} style={{width: 100, height: 40}} />
                </View>
              ),
              headerLeft: () => (
                <TouchableOpacity style={styles.iconWrapper}>
                  <Image source={icon_menu} style={{width: 20, height: 14}} />
                </TouchableOpacity>
              ),
              headerLeftContainerStyle: {
                paddingHorizontal: 20,
              },
              headerRight: () => (
                <>
                  <TouchableOpacity
                    style={[
                      styles.iconWrapper,
                      {
                        marginRight: 13,
                      },
                    ]}>
                    <Image
                      source={icon_search}
                      style={{width: 16, height: 16}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.iconWrapper,
                      {
                        marginRight: 13,
                      },
                    ]}>
                    <Image
                      source={icon_notification}
                      style={{width: 15, height: 18}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconWrapper}>
                    <Image source={icon_cart} style={{width: 18, height: 20}} />
                  </TouchableOpacity>
                </>
              ),
              headerRightContainerStyle: {
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              },
              headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={({route}) => ({
              title: route?.params?.title ?? 'Detail',
              // headerTitle: props => (<View style={{width: 100, height: 26, backgroundColor: 'cyan'}}></View>),
              headerTitleAlign: 'left',
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  style={[props.style, {marginHorizontal: 0}]}
                />
              ),
              headerBackImage: () => (
                <View style={styles.iconWrapper}>
                  <Image source={icon_back} style={{width: 17, height: 14}} />
                </View>
              ),
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
              headerRight: () => (
                <>
                  <TouchableOpacity
                    style={[
                      styles.iconWrapper,
                      {
                        marginRight: 13,
                      },
                    ]}>
                    <Image
                      source={icon_search}
                      style={{width: 16, height: 16}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconWrapper}>
                    <Image source={icon_cart} style={{width: 18, height: 20}} />
                  </TouchableOpacity>
                </>
              ),
              headerRightContainerStyle: {
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
              },
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontSize: 17,
                lineHeight: 23,
                fontFamily: 'Avenir-Roman',
              },
              headerTitleContainerStyle: {
                left: 50,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 20,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
