

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '099360d94a3ee7c24416ecc6fa0cbf31';



export function requestGet(endPoint, query = '') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&units=metric&APPID=${apiKey}`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
    if (response.status === 200) {
        return response
        .json()
        .then(json => {
                return json !== undefined ? json : {};
            })
            .catch(e => ({}));
    }
    return response.status;
});
}