import axios from 'axios'
import ApiRs from './provedor_rs.json'
// const url = 'https://www.peeringdb.com/api/org?state=rs'
const ApiLocation = 'https://api.bigdatacloud.net/data/client-info'

// const url = 'https://www.peeringdb.com/api/org?state=rs'
const Api = async () => {
    try {
        const data = await axios.get(ApiLocation, { responseType: 'json' })
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}



export { Api, ApiRs }