import * as Yup from 'yup';
import { YOUTUBE_REGEX } from '../../../shared/regex';

export const sharedVideoInputFields: Record<string, string>[] = [
  {
    label: 'Title',
    type: 'text',
    name: 'title',
  },
  {
    label: 'VideoUrl',
    type: 'text',
    name: 'videoUrl',
  },
];

export const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  videoUrl: Yup.string()
    .matches(YOUTUBE_REGEX, 'Invalid Youtube Url, Try again.')
    .required('Video URL is required'),
});

export const initialValues = {
  title: '',
  description: '',
  videoUrl: '',
};
