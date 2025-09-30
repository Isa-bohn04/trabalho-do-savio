import React, { useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

const generos = [
  "Todos","Aventura","Biografia","Clássicos","Conto","Crônica","Drama","Educação","Fantasia","Ficção Científica",
  "Filosofia","História","Humor","Infantil","Mistério","Policial","Poesia","Romance","Terror","Autoajuda","Religião","Saúde","Tecnologia","Economia","Artes"
];

const livrosPorGenero = {};
generos.forEach((g) => {
  livrosPorGenero[g] = Array.from({ length: 10 }, (_, i) => ({
    id: `${g}-${i+1}`,
    titulo: `${g} Livro ${i+1}`,
    src: `capa${i+1}.jpg` // coloque suas imagens na pasta assets
  }));
});

export default function Home() {
  const [generoSelecionado, setGeneroSelecionado] = useState("Todos");

  const renderCarrossel = (genero) => {
    const livros = genero === "Todos" ? Object.values(livrosPorGenero).flat() : livrosPorGenero[genero];
    return (
      <View style={styles.generoSection} key={genero}>
        <Text style={styles.generoTitulo}>{genero}</Text>
        <FlatList
          horizontal
          data={livros}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <View style={styles.livro}>
              <Image source={{ uri: item.src }} style={styles.livroImg} />
              <Text style={styles.livroTitulo}>{item.titulo}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={{ uri: "logo.png" }} style={styles.logo} />
        <View style={styles.nav}>
          <TouchableOpacity><FontAwesome name="home" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="search" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome name="user" size={24} color="white" /></TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Bem-vindo(a) à Biblioteca!</Text>
      </View>

      {/* Filtro */}
      <View style={styles.filtro}>
        <Picker
          selectedValue={generoSelecionado}
          onValueChange={(itemValue) => setGeneroSelecionado(itemValue)}
          style={{ width: 200 }}
        >
          {generos.map((g) => (
            <Picker.Item label={g} value={g} key={g} />
          ))}
        </Picker>
      </View>

      {/* Carrosséis */}
      {generoSelecionado === "Todos"
        ? generos.map((g) => renderCarrossel(g))
        : renderCarrossel(generoSelecionado)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1e90ff"
  },
  logo: { width: 50, height: 50 },
  nav: { flexDirection: "row", gap: 20 },
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  bannerText: { color: "white", fontSize: 24, fontWeight: "bold" },
  filtro: { marginVertical: 10, alignItems: "center" },
  generoSection: { marginBottom: 30 },
  generoTitulo: { fontSize: 20, color: "#1e90ff", marginLeft: 10, marginBottom: 10 },
  livro: {
    width: 120,
    marginRight: 16,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  livroImg: { width: 120, height: 200, borderRadius: 4 },
  livroTitulo: { marginTop: 8, fontWeight: "bold", textAlign: "center" }
});
