export const getUsers = (filters = '') => fetch(`https://randomuser.me/api${filters}`)
    .then(response => response.json());