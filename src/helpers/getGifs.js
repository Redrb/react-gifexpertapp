export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=gZEl6ylhPXruCN6T9aU4a8LYwXbIgeAO`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url,
      };
    });

    return gifs;
  };