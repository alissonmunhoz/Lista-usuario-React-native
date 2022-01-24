import React, { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return(

        <View style={style.form}>
            <Text>Nome:</Text>
            <TextInput
                style={style.input} 
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email:</Text>
            <TextInput
                style={style.input} 
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>Url do Avatar:</Text>
            <TextInput
                style={style.input} 
                onChangeText={avatar_url => setUser({...user, avatar_url})}
                placeholder="Informe o Avatar"
                value={user.avatar_url}
            />
            <Button 
                title='Salvar'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )

}


const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
}) 

