import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import DetalheLivro from './screens/DetalheLivro';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"Cadastro"}>
            <Stack.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={"Cadastro"} component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name={"DetalheLivro"} component={DetalheLivro} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
