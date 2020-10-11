
export const getReceta = async() => {
    const url = 'https://recipe-rissoto.now.sh/recipe';
    const resp =  await fetch(url , {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    });
    const data = await resp.json();
    console.log(data);
    return data;
}
