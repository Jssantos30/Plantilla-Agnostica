import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    ScrollView,
} from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View >
                <Image source={require('../../../assets/software.png')}
                    style={styles.logo_item}
                />
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true} >

                    <Image
                        style={styles.image}
                        source={require('../../../assets/blog-turismo.png')}
                    />
                    <Image
                        style={styles.image_item}
                        source={require('../../../assets/blog-turismo.png')}
                    />
                </ScrollView>
            </View>
            <TouchableOpacity >
                <Text style={styles.inicio}
                onPress={() => navigation.navigate('LoginForm')}
                >INICAR SESIÓN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.registro}
                onPress={() => navigation.navigate('RegisterUser')}
                >CREAR MI CUENTA</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    image: {
        margin: 5,
        width: 520,
        height: 500,
    },
    image_item: {
        margin: 5,
        width: 520,
        height: 500,
    },
    texto_scroll: {
        marginLeft: 250,
    },
    inicio: {
        backgroundColor: "#0E89AD",
        marginLeft: 50,
        textAlign: "center",
        marginTop: 50,
        borderRadius: 50,
        height: 40,
        alignContent: "center",
        padding: 10,
        marginRight: 50
    },
    registro: {
        backgroundColor: "#0E89AD",
        marginLeft: 50,
        textAlign: "center",
        marginTop: 12,
        borderRadius: 50,
        height: 40,
        alignContent: "center",
        padding: 10,
        marginRight: 50
    },
    logo_item: {
        width: 300,
        height: 50,
        marginRight: 10,
        marginLeft: 100,
        marginBottom: 20,
        marginTop: 40
    },
});
