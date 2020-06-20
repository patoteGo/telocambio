

export const fetchUser = async () => {
    const response = await fetch('https://reqres.in/api/users/2')
    return await response.json();
}