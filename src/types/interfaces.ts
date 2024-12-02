export interface Art {
   id: number;
   title: string;
   artist_title: string;
   image_id: string;
}

export interface ArtById extends Art {
   date_start: number;
   date_end: number;
   place_of_origin: string;
   dimensions: string | null;
   credit_line: string;
   copyright_notice: string | null;
}

export interface ArtByIdWithImage extends ArtById {
   imageUrl: string;
}

export type SortType = 'A-Z' | 'Z-A' | 'latest' | 'newest' | '';
