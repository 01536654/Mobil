import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>BEM VINDO!!</Text>
        <StatusBar style="auto" />
      <View style={styles.view1}>
      <MaterialCommunityIcons name="fruit-watermelon" size={24} color="black" />
        <View>
          <Text style={styles.caixaUm}>SALADA DE FRUTA</Text>
          <Text>Gourmet/Fitness</Text>
        </View>
      </View>

      </View>
      <View style={styles.textocorrido}>
        <Text>Experimente nossos produtos, neles depositamos muita energia e inspiração com foco em alta qualidade e sabor!
        </Text>
      </View>

      <View>
        <Text style={styles.postagem}>Opções:</Text><Text></Text>
        <Text style={styles.postagem}>Fruit Simples</Text><Text>Salada Opcional + acompanhamento</Text>
        <Text style={styles.postagem}>Fruit Gourmet</Text><Text>Salada opcional + acompamhamento + água</Text>
        <Text style={styles.postagem}>Fruit Fitness</Text><Text>Salada opcional + acompanhamento + água + elemento fitness</Text>
      </View>
      <View style={styles.Imagem}>
        <Text>Imagem</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E6C79C',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100,
  },

  caixaUm: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  texto2: {
    width: '78%',
    fontSize: 17,
  },

  view1: {
    width: "100%",
    display: 'flex',
    height: 100,
    marginTop: 70,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#eee',
    borderRadius: 30,
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green'
  },
  textocorrido: {
    textAlign: 'justify',
    marginLeft: 10,
    marginTop: 40,
  },
  postagem: {
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 300,
    marginTop: 40,
  },
  Imagem: {
    marginTop: 100,
    paddingHorizontal: 265,
    paddingVertical: 300,
    paddingEnd: 200,
    backgroundColor: 'green',
  },


});
