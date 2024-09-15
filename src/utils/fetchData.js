import { apiCache } from '../data.js';

export async function fetchData(url) {
  if (apiCache.has(url)) {
    return apiCache.get(url);
  }

  apiCache.set(url, await fetchApi(url));
  return apiCache.get(url);
}

async function fetchApi(url) {
  const response = await fetch(url);

  if (!response.ok || response.status === 204) {
    throw new Error(`HTTP ${response.status}  ${response.statusText}`);
  }

  return response.json();
}
