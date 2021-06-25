export const fetchCall = async (url) => {
  try {
    const resp = await fetch(url);
    const json = await resp.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};
