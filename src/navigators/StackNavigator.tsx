import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigator';
import {SelectBlogScreen} from '../screens/SelectBlogScreen';
import {BackIcon} from '../components/BackIcon';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          height: 100,
        },
      })}>
      <Stack.Screen
        name="TabNavigator"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="SelectBlogScreen"
        component={SelectBlogScreen}
        options={{
          title: '기술 블로그 선택',
          headerLeft: props => <BackIcon onPress={props.onPress} />,
        }}
      />
    </Stack.Navigator>
  );
};
