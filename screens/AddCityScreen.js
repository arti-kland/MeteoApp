import React from 'react';
import {View, Button, TextInput, Text, StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const SearchScreen = props => {

    const styleSheet = {
        container: {
            width: width,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        label: {
            color: 'grey',
            fontSize: 18,
        },
        input: {
            width: '100%',
            height: 40,
            borderColor: 'grey',
            borderWidth: 1,
        },
    };

    async function handleSubmit() {
            await AsyncStorage.setItem('city', city);
        dispatch.app.setCity(city);
        
      
    }
    //const city = useSelector(state => state.app.city);

    return(
        <View style = {styleSheet.container}>
            <Text style = {styleSheet.label}>Ville</Text>
            <TextInput style = {styleSheet.input}
        
            onChangeText = {(text) => setCity(text)}
       
            />
            <Button
            onPress = {handleSubmit}
            title = "OK"
            color = "#841584"
            />
        </View>
    );
};

export default SearchScreen;