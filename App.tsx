import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
 import pokemonList from './data.json'

const App = () => {
  return(
  <SafeAreaView style={styles.container}>
    {/* {
      pokemonList.map(pokemon => {
        return(
          <View style={ styles.card } key={ pokemon.id }>
            <Text style={ styles.cardText }>{ pokemon.type }</Text>
            <Text style={ styles.cardText }>{ pokemon.name }</Text>
          </View>
        )
      })
    } */}
    <View style={ styles.scrollView }>
    <FlatList 
    data = { pokemonList }
    renderItem={({item}) => {
      return(
        <View style={ styles.card } key={ item.id }>
            <Text style={ styles.cardText }>{ item.type }</Text>
            <Text style={ styles.cardText }>{ item.name }</Text>
        </View>
      )
    }}
    ItemSeparatorComponent={<View style={{height:16}}></View>}
    ListHeaderComponent={<Text style={ styles.headerText }>Pokemon List</Text>}
    ListFooterComponent={<Text style={styles.footerText}>End of Pokemon List</Text>}
    />
    </View>
  </SafeAreaView>
  );
 }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  scrollView:{
    paddingHorizontal: 16,
  },
  card:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText:{
    fontSize: 30,
    color: 'black'
  },
  headerText:{
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  footerText:{
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12
  }
})

 export default App;
