import { useEffect, useState } from "react";

export interface Photo {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const usePhotosData = () => {
  const [photos, setPhotos] = useState<Photo[]>();

  useEffect(() => {
    console.log("Fetching photos data");
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response: Response) => response.json())
      .then((data: Photo[]) => setPhotos(data))
      .catch((error) => console.error(error));
  }, []);

  return { photos };
};
