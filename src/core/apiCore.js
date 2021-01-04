
import { API } from './config'

export const getDepartments = (user) => {
    return fetch(`${API}/dep/list.php`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })

        .catch(err => {
            console.log(err);

        })
}
