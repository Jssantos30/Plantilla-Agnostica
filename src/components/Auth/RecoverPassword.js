import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { Icon } from 'react-native-elements';

export default function RecoverPassword({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.arrow}>
                <Icon
                    name="arrow-left"
                    type="font-awesome"
                    onPress={() => navigation.navigate('LoginForm')}
                />
            </View>

            <View style={styles.text_question}>
                <TextInput style={styles.text_question_item} >
                    ¿Olvidaste tu contraseña?
                </TextInput>
            </View>

            <View style={styles.text_legend}>
                <Text style={styles.text_legend_item} >
                    Ingresa el email asociado a tu cuenta y te enviaremos
                    un enlace a tu correo para restablecer la contraseña.
                </Text>
            </View>

            <View style={styles.input_email}>
                <TextInput
                    style={styles.input_email_item}
                    placeholder="Correo electrónico"
                    placeholderTextColor="white"
                    color="white"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.recoverPass}>
                <TouchableOpacity>
                    <Text style={styles.recoverPass_item}
                        onPress={() => navigation.navigate('LoginForm')}
                    >RESTABLECER CONTRASEÑA
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#273B47",
    },
    arrow: {
        marginRight: 390,
        marginLeft: 10,
        marginTop: 20,
        size: 20,
    },
    text_question: {
        marginLeft: 20,
        marginTop: 80,
        marginBottom: 20

    },
    text_question_item: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    text_legend: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 100
    },
    text_legend_item: {
        fontSize: 13,
        fontWeight: "arial",
        textAlign: "left",
        color: "white"
    },
    input_email: {
        margin: 20
    },
    input_email: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        margin: 12,
        borderColor: "white",
        backgroundColor: "black",
    },
    recoverPass: {
        margin: 10
    },
    recoverPass_item: {
        backgroundColor: "green",
        marginLeft: 50,
        textAlign: "center",
        borderRadius: 50,
        height: 40,
        alignContent: "center",
        padding: 10,
        marginRight: 50
    },
})