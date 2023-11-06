const API_URL = "http://localhost:4000";

async function getCategoryOptions(category) {
  const res = await fetch(`${API_URL}/${category}`);
  const data = await res.json();
  return data;
}

export { getCategoryOptions };
