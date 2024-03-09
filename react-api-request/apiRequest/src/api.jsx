import axios from 'axios'

let searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers : {
        Authorization:'Client-ID OkCodrt2QguKaaXNXkmLB2vrYsOjcXiUylDdSfqlMaI'
      },
      params : {
        query : term
      }
    })
    return response.data.results
  }

export default searchImages