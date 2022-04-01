import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tarefa } from '../model/tarefa';
import Home from '../screens/Home';
import { TarefaScreen } from '../screens/tarefa';

export type TarefaNavegacaoParams = {
    Home: undefined,
    tarefa: {tarefa?: Tarefa},
    Login: undefined
}

const Stack = createNativeStackNavigator<TarefaNavegacaoParams>();

export const NavegacaoTarefa = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="tarefa" component={TarefaScreen} />
    </Stack.Navigator>
)