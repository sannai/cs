const queryString = require('querystring')
import axios from 'axios'
//电影接口
// export default function fetchFilm(url) {
//   return new Promise((resole, reject) => {
//     axios.get(url).then(response => {
//           return response
//       }).then(json => {
//           resole(json)
//       }).catch(err => {
//           reject(err)
//       })
//   })
// }

export default async function fetchFilm(url, query, token='') {
  try {
    const response = await axios.get(`${url}?${queryString.stringify(query)}`)
    return response
  }catch(error) {
    console.log(error,'什么鬼')
  }
}

// export async function get(uri, query, token='') {
//     let header = {}
//     if(token) {
//         header = {
//             Authorization: token
//         }
//     } else {
//         header = {}
//     }
//     const response = await fetch(`${uri}?${queryString.stringify(query)}`,{
//         method:'GET',
//         headers: {
//             ...header
//         }
//     })
//     checkStatus(response)
//     const data = await response.json()
//     return data
// }
