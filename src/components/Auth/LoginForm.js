import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Icon } from 'react-native-elements';

export default function LoginForm({ navigation }) {

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <View style={styles.arrow}>
        <Icon
          name="arrow-left"
          type="font-awesome"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.title}>
        <Text style={styles.title_Item}>
          Ingresa y apasionate por la transformación de procesos empresariales.
        </Text>
      </View>

      <View style={styles.input_user}>

        <TextInput
          placeholder="Correo Electrónico"
          placeholderTextColor="white"
          color="white"
          autoCapitalize="none"

        />
      </View>

      <View style={styles.input_password}>
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="white"
          color="white"
          autoCapitalize="none"

        />
      </View>

      <View style={styles.btn}>

        <Button style={styles.btn_Item}
          title="INICIAR SESIÓN"
          color="grey"
          onPress={() => navigation.navigate('Account')}
        />

        <TouchableOpacity>
          <Text style={styles.input_item_select_out}
            onPress={() => navigation.navigate('RecoverPassword')}
          >¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.register}>
        <Text style={styles.input_item_register_user}>¿Aun no tienes una cuenta?</Text>
        <TouchableOpacity>
          <Text style={styles.input_item_select_register}
            onPress={() => navigation.navigate('RegisterUser')}
          >Registrate
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
    size: 20
  },
  title: {
    marginTop: 140,
    marginRight: 60,
    marginBottom: 20,
    marginLeft: 60
  },
  title_Item: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  input_user: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "white",
    backgroundColor: "black",
    marginLeft: 20,
    marginRight: 20,
  },
  input_password: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "black",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  input_item_select_out: {
    textAlign: "center",
    color: "#0E89AD",
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  input_item_cuenta: {
    textAlign: "center",
    marginTop: 40
  },
  btn: {
    height: 80,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20
  },
  btn_Item: {
    flex: 0.3,
  },
  register: {
    flexDirection: "row",
    marginTop: 260
  },
  input_item_select_register: {
    marginTop: 40,
    marginLeft: 40,
    color: "#0E89AD"
  },
  input_item_register_user: {
    marginTop: 40,
    marginLeft: 120,
    color: "white"
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});