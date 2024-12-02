import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Art, ArtById } from 'src/types/interfaces';

import {
   ART_FOR_PAGE,
   ART_LIST_LIMIT,
   ART_RECOMMENDED_LIMIT_FOR_PAGE,
} from '@/constants/constants';

const instance: AxiosInstance = axios.create({
   baseURL: 'https://api.artic.edu/api/v1/',
});

export async function getArtLists(query: string | undefined, page: number) {
   const response: AxiosResponse = await instance.get('artworks/search', {
      params: {
         q: query,
         page,
         limit: ART_FOR_PAGE,
         fields: 'id,artist_title,title,image_id',
      },
   });

   return [response.data.data, response.data.pagination];
}

export async function getRecommendedArts(): Promise<Art[]> {
   const response: AxiosResponse = await instance.get('artworks', {
      params: {
         page: Math.floor(Math.random() * ART_LIST_LIMIT),
         limit: ART_RECOMMENDED_LIMIT_FOR_PAGE,
         fields: 'id,title,artist_title,image_id',
      },
   });

   return response.data.data;
}

export const getArtById = async (id: number): Promise<ArtById> => {
   const response = await instance.get(`/artworks/${id}`, {
      params: {
         id,
         fields:
            'dimensions,place_of_origin,copyright_notice,artist_title,title,image_id,date_start,date_end,credit_line',
      },
   });

   return response.data.data;
};
