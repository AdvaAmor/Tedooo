import axios from 'axios';
import {TGetPostsReport} from './type';

export const getPosts = async (skip: number):Promise<TGetPostsReport> => {
    const response = await axios({
      method: 'GET',
      url:'https://backend.tedooo.com/hw/feed.json',
      params: { skip },
    });

    return response.data;
};

export const addViewedPosts = async (id: string) => {
  return await axios({
    method: 'GET',
    url:'https://backend.tedooo.com',
    params: { id },
  });

};