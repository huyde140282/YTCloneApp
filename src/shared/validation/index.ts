import { YOUTUBE_REGEX } from '../regex';

export const isYouTubeVideoUrlValid = (url: string): boolean => {
  return YOUTUBE_REGEX.test(url);
};
