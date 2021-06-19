
import { isAuthenticated } from ".";
import { API } from "./config";

export const userFetch = ({
    uri = '',
    body = false,
    method = "GET"
}) => {
    const { token, user } = isAuthenticated();
    return fetch(`${API}${uri}`, {
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};


