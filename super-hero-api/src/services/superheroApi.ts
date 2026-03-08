import axios from "axios";


const ACCESS_TOKEN= "139b2f6198630db082b4db99c4a98653";

const URL_BASE= `https://superheroapi.com/api/${ACCESS_TOKEN}`;

export const searchHero = async (name: string) => {
  try {

    const response = await axios.get(`${URL_BASE}/search/${name}`);

    console.log("AXIOS RESPONSE:", response.data);

    const data = response.data;

    if (data.response === "success") {
      return data.results[0];
    }

    console.log("API ERROR:", data);
    return null;

  } catch (error) {
    console.log("Error al buscar el heroe", error);
    return null;
  }
};

export const getHeroById = async (id: string) =>{

    try {

        const response = await axios.get(`${URL_BASE}/${id}`)
        const data = response.data;

        if (data.response === "success"){
            return data;
        }

        return null;
        
        
        


        
    } catch (error) {
        console.log("Error al tratar de obtener el heroe por id", error)
        return null;
        
    }


}


export const smartSearchHero = async (query: string) => {

  //si es numero se busca por id
  if (!isNaN(Number(query))) {
    return await getHeroById(query);
  }

  //si es texto se busca por nombre
  return await searchHero(query);

};