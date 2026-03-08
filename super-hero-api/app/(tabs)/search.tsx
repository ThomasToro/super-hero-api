import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SearchBar from "@/src/components/SearchBar";
import { searchHero, getHeroById, smartSearchHero} from "../../src/services/superheroApi";
import HeroCard from "@/src/components/HeroCard";

export default function SearchScreen() {

  const [hero, setHero] = useState<any>(null);

  const handleSearch = async (query: string) => {

    const result = await smartSearchHero(query);

    setHero(result);
    const newHero=hero;
    console.log("Nuevo heroe:", newHero);
  };



  return (

    <View style={styles.container}>

      <SearchBar onSearch={handleSearch} />

      {hero && (

        console.log(hero.image.url),
        
        <View style={styles.heroContainer}>

          <Image
            source={{ uri: hero.image.url }}
            style={styles.image}
          />

          <Text style={styles.name}>{hero.name}</Text>
          
          <HeroCard hero={hero} />
        </View>

        

      )}

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },

  heroContainer: {
    marginTop: 40,
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  name: {
    color: "white",
    fontSize: 24,
    marginTop: 15,
  },

});