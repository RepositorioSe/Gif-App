export const getGifts = async (category) => {
  const Url = `https://api.giphy.com/v1/gifs/search?api_key=m1kQpIyUwsd2hlpRJppXxauuvK9haCOR&q=${category}&limit=10`;
  const resp = await fetch(Url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
