const token = '1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj';
const API_URL='https://recruitment.shippypro.com/flight-engine/api'

//get flights api call
export const getFlights = () => {
    return fetch(`${API_URL}/flights/all`, {
        method: 'GET',
        headers: new Headers({
        Authorization: `Bearer ${token}`,
        }),
    })
    .then((response) => response.json())
    .then((data => console.log(data)))
}

//get airports 
export const getAirports = () => {
    return fetch(`${API_URL}/airports/all`, {
        method: 'GET',
        headers: new Headers({
        Authorization: `Bearer ${token}`,
        }),
    })
    .then((response) => response.json())
    .then((data => console.log(data)))
}

// get airlines
export const getAirlines = () => {
    return fetch(`${API_URL}/airlines/all`, {
        method: 'GET',
        headers: new Headers({
        Authorization: `Bearer ${token}`,
        }),
    })
    .then((response) => response.json())
    .then((data => console.log(data)))
}

// get flights routes
export const getRoute=()=> {
    return fetch(`${API_URL}/flights/from/MXP/to/VCE`, {
        method: 'GET',
        headers: new Headers({
        Authorization: `Bearer ${token}`,
        }),
    })
    .then((response) => response.json())
    .then((data => console.log(data)))
}