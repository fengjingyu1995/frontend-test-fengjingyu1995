import { format } from 'date-fns';
import { Block } from '../blocks';

export const getCreatedAtFromImageBlockWithFormat = (block?: Block): string => {
  const createdAt = block?.data?.createdAt;
  if (!createdAt) {
    return '';
  }

  return format(new Date(createdAt), 'MMM d, yyyy');
};
