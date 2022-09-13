import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { Icon } from 'react-native-elements';

export default function RegisterUser({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

            <View style={styles.arrow}>
                <Icon
                    name="arrow-left"
                    type="font-awesome"
                    onPress={() => navigation.navigate('LoginForm')}
                />
            </View>
            <View>
                <View style={styles.logo}>
                    <Image source={require('./Images/SASOFTCO.png')}
                        style={styles.logo_item}
                    />
                    <View style={styles.text_logo}>
                        <Text style={styles.text_logo_bien}>
                            Bienvenido/a
                        </Text>
                        <Text style={styles.text_logo_union}>
                            Gracias por unirte a Sasoftco
                        </Text>
                    </View>
                </View>
                <Text style={styles.title}>
                    Completa tus datos personales
                </Text>
            </View>

            <View style={styles.input_user} >
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="white"
                    color="white"
                    autoCapitalize="none"
                    keyboardType="default"
                />
            </View>

            <View style={styles.input_user_one} >
                <TextInput
                    placeholder="Apellido"
                    placeholderTextColor="white"
                    color="white"
                    autoCapitalize="none"
                    keyboardType="default"
                />
            </View>

            <View style={styles.input_user_two} >
                <TextInput
                    placeholder="Correo Electronico"
                    placeholderTextColor="white"
                    color="white"
                    autoCapitalize="none"
                    keyboardType="default"
                />
            </View>

            <View style={styles.input_user_three} >
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="white"
                    keyboardType="default"
                    color="white"
                    autoCapitalize="none"
                />
            </View>
            
            <View style={styles.input_user_four} >
                <TextInput
                    placeholder="Teléfono"
                    keyboardType="numeric"
                    placeholderTextColor="white"
                    color="white"
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.select}
                >CREAR CUENTA</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <Text style={styles.input_item_register_user}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity>
                    <Text style={styles.input_item_select_register}
                        onPress={() => navigation.navigate('LoginForm')}
                    >Ingresa
                    </Text>
                </TouchableOpacity>

            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#273B47",
    },
    arrow: {
        marginRight: 500,
        marginLeft: 10,
        marginTop: 20,
        size: 20,
      },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
        color: "white",
        marginLeft: 30
    },
    logo: {
        paddingTop: 'auto',
        marginTop: 70,
        alignItems: 'center',
        flexDirection: "row",
        marginLeft: 30,
        marginBottom: 10
    },
    logo_item: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    text_logo_bien: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    text_logo_union: {
        color: "white"
    },
    text_logo_union: {
        color: "white"
    },
    input_user: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    input_user_one: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    input_user_two: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    input_user_three: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    input_user_four: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    select: {
        backgroundColor: "green",
        marginLeft: 50,
        textAlign: "center",
        marginTop: 12,
        borderRadius: 50,
        height: 40,
        alignContent: "center",
        padding: 10,
        marginRight: 50

    },
    register: {
        flexDirection: "row",
        marginTop: 100
    },
    input_item_select_register: {
        marginTop: 40,
        marginLeft: 50,
        color: "#0E89AD"
    },
    input_item_register_user: {
        marginTop: 40,
        marginLeft: 120,
        color: "white"
    },
    icon: {
        color: "white"
    },
});