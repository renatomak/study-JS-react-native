import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Sigin from '../pages/Signin';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Sigin} />
  </AuthStack.Navigator>;
};

export default AuthRoutes;
