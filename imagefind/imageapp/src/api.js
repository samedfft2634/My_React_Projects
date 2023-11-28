import axios from 'axios';

 const searchImage = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: "Client-ID dnMCwGb0ThT2FFHtsLjRKd4BerbiC_Et4nAqrXJNvlI",
        },
        params:{
            query: term,
        },
    })
    console.log(response.data.results);
    return response.data.results
}

export default searchImage;