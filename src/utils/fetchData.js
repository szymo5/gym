export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        // 'X-RapidAPI-Key': '7cd5d696abmsh396c3c462f2f0cdp132a00jsn6fe294bb780e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}