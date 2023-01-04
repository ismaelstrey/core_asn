import axios from 'axios'
import ApiRs from './provedor_rs.json'
const url = 'https://www.peeringdb.com/api/org?state=rs'

// const url = 'https://www.peeringdb.com/api/org?state=rs'
const Api = async () => {
    try {
        const data = await axios.get(url, { responseType: 'json' })
        return data
    } catch (error) {
        console.log(error)
    }
}



export { Api, ApiRs }