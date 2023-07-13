export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '59caf9ead9msh34af5c9e53706c7p18a742jsn6e002bdb7019',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    
    return result;
}