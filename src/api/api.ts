import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { ART_FOR_PAGE } from '@/constants/constants';

const instance: AxiosInstance = axios.create({
   baseURL: 'https://api.artic.edu/api/v1/',
});

export async function getArtLists(query: string | undefined, page: number) {
   try {
      const response: AxiosResponse = await instance.get('artworks/search', {
         params: {
            q: query,
            page,
            limit: ART_FOR_PAGE,
            fields: 'id,artist_title,title,image_id',
         },
      });

      return [response.data.data, response.data.pagination];
   } catch (error) {
      throw error;
   }
}
