export const getAllUser = async () => {
    const getData = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await getData.json();
    return data;
}