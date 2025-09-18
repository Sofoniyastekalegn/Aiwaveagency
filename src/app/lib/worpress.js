// lib/wordpress.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
});

// Example function to get pages
export async function getPageBySlug(slug) {
  try {
    const response = await api.get(`/pages`, {
      params: { slug: slug },
    });
    return response.data[0]; // Returns the first item in the array
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}

// Example function to get all posts for a blog section
export async function getPosts() {
  try {
    const response = await api.get('/posts', {
      params: { _embed: true }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
