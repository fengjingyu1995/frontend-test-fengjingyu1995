import { BrowserRouter as Router } from 'react-router-dom';
import { Block, getBlocks } from './blocks';

import { Header } from './components/Header/Header';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { useEffect, useState } from 'react';
import { getCreatedAtFromImageBlockWithFormat } from './utils/getCreatedAtFromImageBlockWithFormat';
import { getDimensionsFromImageBlock } from './utils/getDimensionsFromImageBlock';


export const App = () => {
  const [data, setData] = useState<Block|undefined>()
  const [selectedBlock, setSelectedBlock] = useState<Block|undefined>()
  const [selectedImageTarget, setSelectedImageTarget] = useState<any>()

  useEffect(() => {
    getBlocks().then((data) => {
      setData(data)
    })
  }, [])

  const handleBlockSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedBlock: Block | undefined) => {
    setSelectedImageTarget(e.currentTarget)
    setSelectedBlock(selectedBlock);
  }
  
  return (
    <Router>
      <Header />
      <main>
        {data ? 
          <div aria-label="A simplified representation of blocks in our drag and drop block editor">
            <ImageGrid 
              data={data} 
              selectedBlock={selectedBlock} 
              setSelectedBlock={setSelectedBlock}
              handleBlockSelect={handleBlockSelect} 
            />
            <InfoPanel id={selectedBlock?.id}
              description = {selectedBlock?.data?.description.toString()}
              dimensions= {getDimensionsFromImageBlock(selectedBlock)}
              createdAt= {getCreatedAtFromImageBlockWithFormat(selectedBlock)}
              selectedImageTarget={selectedImageTarget}
            />
          </div>
        : <div>Loading...</div>
      }
      </main>
    </Router>
  );
};
