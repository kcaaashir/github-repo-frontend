import { API } from '../config'


export const getRepositary = (userName, perPage = 10) => {
    console.log(API)
    return fetch(`${API}/github/read?userName=${userName}&perPage=${perPage}`, {
        method: "GET",
    }).then(response => {
        return response.json()
    }).catch( err => {
        console.log(err)
    })
}
