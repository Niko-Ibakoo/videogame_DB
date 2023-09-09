 export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  rating: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailers>;
}

 export interface APIResponse<T> {
  results: Array<T>;
}

 interface Genre {
  name: string;
}

 interface ParentPlatform {
  platform: {
    name: string;
  };
}

 interface Publishers {
  name: string;
}

 interface Rating {
  title: string;
  id: number;
  count: number;
}
 interface Screenshots{
    image: string;
}

 interface Trailers{
    data:{
        max:string
    }
}
