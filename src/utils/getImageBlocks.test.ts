import { Block } from './../blocks';
import { getImageBlocks } from './getImageBlocks';
export const simpleBlock: Block = {
  type: 'PlainText',
  id: '1',
  data: {
    text: 'text block 1',
  },
  children: [
    {
      type: 'Image',
      id: '2',
      data: {
        text: 'text block 2',
      },
      children: [],
    },
    {
      type: 'Image',
      id: '4',
      data: {
        text: 'text block 4',
      },
      children: [],
    },
    {
      type: 'PlainText',
      id: '3',
      data: {
        text: 'text block 5',
      },
      children: [
        {
          type: 'Image',
          id: '5',
          data: {
            text: 'text block 5',
          },
          children: [],
        },
      ],
    },
  ],
};
describe('getImageBlocks', () => {
  it('Should get an array of image blocks', () => {
    const imageBlocks = getImageBlocks(simpleBlock);
    const expectedImageBlocks = [
      {
        type: 'Image',
        id: '2',
        data: {
          text: 'text block 2',
        },
        children: [],
      },
      {
        type: 'Image',
        id: '4',
        data: {
          text: 'text block 4',
        },
        children: [],
      },
      {
        type: 'Image',
        id: '5',
        data: {
          text: 'text block 5',
        },
        children: [],
      },
    ];
    expect(imageBlocks).toEqual(expectedImageBlocks);
  });
  it("Should return a empty array if it doesn't have any image blocks", () => {
    const noImageBlock: Block = {
      id: 'CVNt6d2Nw9s',
      type: 'Column',
      children: [],
      data: {
        description: 'Palm tree',
      },
    };
    expect(getImageBlocks(noImageBlock)).toEqual([]);
  });
});
export {};
