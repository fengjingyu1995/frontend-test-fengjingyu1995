import { Block } from '../blocks';

export function getImageBlocks(data: Block): Block[] {
  const imageBlocks = [];
  if (data.type === 'Image') {
    // the image block pushed to the array should not contain children
    imageBlocks.push({ ...data, children: [] });
  }
  if (data.children && data.children.length > 0) {
    for (const child of data.children) {
      imageBlocks.push(...getImageBlocks(child));
    }
  }
  return imageBlocks;
}
