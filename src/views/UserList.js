
import React, { useContext } from "react";
import { FlatList, Text, View,Alert} from 'react-native'

import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import UsersContext from "../context/UsersContext";


export default props => {

   const {state, dispatch }=  useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja realmente excluir o usuário0?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({ //esse objeto abaixo representa a "action"
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }



    function getUserItem({ item: user }) {
        return (
            <ListItem.Swipeable                
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}                
                >
                <Avatar rounded title={user.name} source={{ uri: user.avatar_url }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right style={{flexDirection: 'row'}}>
                    <Button type="clear"
                        icon={<Icon name="edit" size={25} color="orange" />}
                        onPress={() => props.navigation.navigate('UserForm', user)} />
                    <Button type="clear"
                        icon={<Icon name="delete" size={25} color="red" />}
                        onPress={() => confirmUserDeletion(user)} />
                </ListItem.Content>
            </ListItem.Swipeable>


        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )




}