import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const generos = [
  'Todos','Aventura','Biografia','Clássicos','Conto','Crônica','Drama','Educação','Fantasia','Ficção Científica',
  'Filosofia','História','Humor','Infantil','Mistério','Policial','Poesia','Romance','Terror','Autoajuda','Religião','Saúde','Tecnologia','Economia','Artes'
];

const livrosMais = Array.from({ length: 10 }, (_, i) => ({
  id: i+1,
  titulo: `Livro ${i+1}`,
  capa: `capa${i+1}.jpg`
}));

const livrosCurriculo = Array.from({ length: 10 }, (_, i) => ({
  id: i+11,
  titulo: `Livro ${i+11}`,
  capa: `capa${i+11}.jpg`
}));

export default function Home() {
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos');

  return (
    <ScrollView style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <View style={styles.nav}>
          <TouchableOpacity><Icon name="home" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity><Icon name="search" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity><Icon name="user" size={24} color="white" /></TouchableOpacity>
        </View>
      </View>

      {/* BANNER */}
      <ImageBackground source={require('./colorful-book-magazine-library-shelf-600nw-2419079741.webp')} style={styles.banner}>
        <Text style={styles.bannerText}>Bem-vindo(a) à Biblioteca!</Text>
      </ImageBackground>

      {/* FILTRO */}
      <View style={styles.filtro}>
        <Picker
          selectedValue={generoSelecionado}
          onValueChange={(itemValue) => setGeneroSelecionado(itemValue)}
          style={{ width: 200 }}
        >
          {generos.map(g => <Picker.Item key={g} label={g} value={g} />)}
        </Picker>
      </View>

      {/* CARROSSEL MAIS EMPRESTADOS */}
      <View style={styles.genero}>
        <Text style={styles.tituloGenero}>Mais emprestados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
          {livrosMais.map(l => (
            <View key={l.id} style={styles.livro}>
              <Image source={require(`./${l.capa}`)} style={styles.capaGrande} />
              <Text style={styles.tituloLivro}>{l.titulo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* CARROSSEL CURRÍCULO ESCOLAR */}
      <View style={styles.genero}>
        <Text style={styles.tituloGenero}>Currículo Escolar</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrossel}>
          {livrosCurriculo.map(l => (
            <View key={l.id} style={styles.livro}>
              <Image source={require(`./${l.capa}`)} style={styles.capaPequena} />
              <Text style={styles.tituloLivro}>{l.titulo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#1e90ff' },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  nav: { flexDirection: 'row', gap: 15 },
  banner: { width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' },
  bannerText: { color: 'white', fontSize: 28, fontWeight: 'bold', textShadowColor: 'rgba(0,0,0,0.5)', textShadowOffset: {width:2, height:2}, textShadowRadius: 6 },
  filtro: { marginVertical: 20, alignItems: 'center' },
  genero: { marginBottom: 40 },
  tituloGenero: { color: '#1e90ff', fontSize: 20, marginBottom: 10, marginLeft: 10 },
  carrossel: { paddingHorizontal: 10 },
  livro: { marginRight: 16, alignItems: 'center' },
  capaGrande: { width: 140, height: 200, borderRadius: 6, resizeMode: 'cover' },
  capaPequena: { width: 120, height: 180, borderRadius: 6, resizeMode: 'cover' },
  tituloLivro: { marginTop: 5, fontWeight: 'bold', fontSize: 14, textAlign: 'center' }
});
