export const getData = async () => {
  const data = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=15"
  );
  return data.json();
};
