import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from "./views/UserList";
import UserForm from "./views/UserForm"
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator()

export default props => {

    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptins}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuário",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Fomulario de Usuários"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>

    )

}

const screenOptins = {
    headerStyle: {
        backgroundColor: '#00FFFF'
    },
    headerTintColor: '#fff',
    headerTintStyle: {
        fontWeight: 'bold'
    }
}