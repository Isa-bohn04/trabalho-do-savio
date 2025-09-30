import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [cgm, setCgm] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = () => {
    if (!cgm || !email || !senha) {
      setMsg("Preencha todos os campos!");
      return;
    }
    setMsg("Logando...");
    // aqui você coloca a lógica do Supabase ou API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Logo da escola */}
      <Image
        source={require("./assets/logo.png")} // coloque o logo em assets/logo.png
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Campos */}
      <TextInput
        style={styles.input}
        placeholder="CGM"
        value={cgm}
        onChangeText={setCgm}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Botão */}
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      {/* Mensagem */}
      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 360,
    padding: 28,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 80,
    shadowColor: "#1e90ff",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 18,
    elevation: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#1e90ff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(30,144,255,0.4)",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  btn: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    marginBottom: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  msg: {
    textAlign: "center",
    fontSize: 14,
    color: "#d9534f",
    marginTop: 10,
  },
});
