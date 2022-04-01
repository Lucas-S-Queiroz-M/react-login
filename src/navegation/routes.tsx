import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screens/Login';
import Home from '../screens/Home';
import Pedidos from '../screens/Pedidos';

const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Pedidos" component={Pedidos}/>
    </Stack.Navigator>
  );
}


export default Routes;