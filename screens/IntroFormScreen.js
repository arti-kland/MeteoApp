import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';

const { width } = Dimensions.get('window');

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

const IntroFormScreen = props => {

    async function handleSubmit() {
        if(name !== '') {
            await AsyncStorage.setItem('name', name);
        dispatch.app.setName(name);
            navigation.navigate('Welcome');
        }
    }
const dispatch = useDispatch()

const [name, setName] = useState('');
const { navigation } = props;

return(
    <View style = {styleSheet.container}>
        <Text style = {styleSheet.label} >Votre Prénom</Text>
        <TextInput
        style = {styleSheet.input}
        onChangeText = {(text) => setName(text)}
        value = {name}
        />
        <Button
        onPress = {handleSubmit}
        title = "OK"
        color = "#841584"
        />
    </View>
);
}

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(IntroFormScreen);