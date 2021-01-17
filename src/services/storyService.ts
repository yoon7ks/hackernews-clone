/* eslint-disable no-shadow */
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
/*
 *  Fetch list of the top 50 stories
 *  returns stories[].
*/

interface Res {
  data: object;
}

export interface Sortable {
  score: number;
}

export async function getTopStories() {
  const { data } = await axios.get(`${baseUrl}/topstories.json`, {});
  if (data && data.length > 50) {
    return data.slice(0, 50);
  }
  return data;
}
/*
 *  Fetch items based on 'ids' from getTopStories()
 *  returns items[].
*/
export async function storiesWithItems(): Promise<Sortable[]> {
  const stories = await getTopStories();

  /*  const items = await Promise.all(stories.map((id: unknown) => {

    )); */

  const map = stories.map((id: unknown) => axios.get(`${baseUrl}/item/${id}.json`));
  const d = await Promise.all(map);
  return d.map((el) => {
    const { data } = el as Res;
    return data;
  }) as Sortable[];
}

/*
 *  Makes request based on the 'id' param
 *  returns response[].
*/
export async function getSingleItem(id: any) {
  let response;
  // eslint-disable-next-line prefer-const
  response = await axios.get(`${baseUrl}/item/${id}.json`);
  return response.data;
}

/*
 *  Makes request based on the 'id' passed to the
 *  getSingleItem(<id>), loops through kids[];
 *  returns comments[].
*/
export async function getSingleStoryComments(id: number) {
  const item = await getSingleItem(id);
  if (!(item && item.kids)) {
    return [];
  }
  const map = item.kids.map((kid: unknown) => axios.get(`${baseUrl}/item/${kid}.json`));
  const d = await Promise.all(map);
  return d.map((el) => {
    const { data } = el as Res;
    return data;
  });
}
/*
 *  Sorts the result based on the property score;
 *  returns a sorted array.
*/
export function sortByScore(a: any, b: any) {
  if (a.score < b.score) {
    // a comes before b in the sorted order
    return -1;
  } if (a.score > b.score) {
    // a comes before b in the sorted order
    return 1;
  }
  // a and b are the same
  return 0;
}
