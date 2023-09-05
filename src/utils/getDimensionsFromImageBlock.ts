import { Block } from '../blocks';

export const getDimensionsFromImageBlock = (block?: Block): string => {
  if (block?.data?.width && block?.data?.height) {
    return `${block?.data.width} x ${block?.data.height}`;
  }
  return '';
};
