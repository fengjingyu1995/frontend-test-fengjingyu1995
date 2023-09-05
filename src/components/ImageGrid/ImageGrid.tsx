import styles from './ImageGrid.module.css';

import { Block } from '../../blocks';
import { useMemo } from 'react';
import { getImageBlocks } from '../../utils/getImageBlocks';
import { useHistory } from 'react-router-dom';

type ImageGridProps = {
  data: Block;
  selectedBlock?:Block;
  setSelectedBlock: React.Dispatch<React.SetStateAction<Block | undefined>>;
  handleBlockSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent> , selectedBlock: Block | undefined) => void
};

export const ImageGrid = (props: ImageGridProps) => {
  const history = useHistory() 

  const { data, selectedBlock, handleBlockSelect } = props;
  const imageBlocks = useMemo(()=>{
    if (data){
      return getImageBlocks(data)
    }
  },[data])

  const selectImage = (e:React.MouseEvent<HTMLDivElement, MouseEvent> , selectedBlock: Block)=>{
    handleBlockSelect(e,selectedBlock)
    history.push(`/${selectedBlock.id}`);
  }

  return (
  <div data-testid="image-grid" className={styles.imageGrid}>
    {imageBlocks && imageBlocks.map((imageBlock)=>{
      return (
      <div 
        tabIndex={0}
        onClick={(e) => selectImage (e,imageBlock)} 
        key={imageBlock.id} 
        className={`${styles.block} ${selectedBlock === imageBlock? styles.selected : ''}`}
        role="button"
        aria-expanded={selectedBlock?.id === imageBlock.id}
        aria-controls={`info-panel-${imageBlock.id}`}>     
          <img src={imageBlock.options?.url} alt={`${imageBlock.data?.description}`}/>
      </div>)
    })}
  </div>);
};
