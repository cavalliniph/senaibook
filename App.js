import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import DetalheLivro from './screens/DetalheLivro';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//<Stack.Navigator initialRouteName={"Login"}>
//    <Stack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
//    <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
//    <Stack.Screen name={"Cadastro"} component={Cadastro} options={{ headerShown: false }} />
//    <Stack.Screen name={"DetalheLivro"} component={DetalheLivro} />
//</Stack.Navigator>

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName={"Login"}>
            <Drawer.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
            <Drawer.Screen name={"Cadastro"} component={Cadastro} options={{ headerShown: false }} />
            <Drawer.Screen name={"DetalheLivro"} component={DetalheLivro} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
