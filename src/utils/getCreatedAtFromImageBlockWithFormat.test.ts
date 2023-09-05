import { Block } from './../blocks';
import { getCreatedAtFromImageBlockWithFormat } from './getCreatedAtFromImageBlockWithFormat';

describe('getCreatedAtFromImageBlockWithFormat', () => {
  it('Should return a formatted date string)', () => {
    const imageBlock: Block = {
      id: 'CVNt6d2Nw9s',
      type: 'Image',
      options: {
        url: 'https://images.unsplash.com/photo-1648582218213-d8565d505b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        align: 'center',
        width: '100%',
      },
      children: [],
      data: {
        description: 'Palm tree',
        width: 770,
        height: 1161,
        createdAt: '2022-03-21T07:16:37.000Z',
      },
    };
    expect(getCreatedAtFromImageBlockWithFormat(imageBlock)).toEqual(
      'Mar 21, 2022'
    );
  });
  it("Should return a empty string if it doesn't have the createdAt", () => {
    const imageBlock: Block = {
      id: 'CVNt6d2Nw9s',
      type: 'Image',
      options: {
        url: 'https://images.unsplash.com/photo-1648582218213-d8565d505b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
        align: 'center',
        width: '100%',
      },
      children: [],
      data: {
        description: 'Palm tree',
        width: 770,
        height: 1161,
      },
    };
    expect(getCreatedAtFromImageBlockWithFormat(imageBlock)).toEqual('');
  });
});
export {};
