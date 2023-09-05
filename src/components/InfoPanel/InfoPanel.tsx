import { useEffect, useRef } from 'react';
import styles from './InfoPanel.module.css';

type InfoPanelProps = {
  id?: string;
  description?: string;
  dimensions?: string;
  createdAt?: string;
  selectedImageTarget?: any
};

export const InfoPanel = (props: InfoPanelProps) => {
  const { id, description, dimensions, createdAt, selectedImageTarget } = props;

  const panelRef = useRef<any>();
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.focus();
    }
  }, [id, panelRef]);

  if (!id) {
    return <aside className={styles.panel}></aside>;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const { key, shiftKey } = e;

    if (!selectedImageTarget) return;

    // 'Esc' or Shift Tab should focus back to the image selected
    if (key === 'Esc' || (shiftKey && key === 'Tab')) {
      e.preventDefault();
      selectedImageTarget.focus();
      return;
    }

    // 'Tab' key should focus to the next focusable image
    if (key === 'Tab') {
      const nextSibling = selectedImageTarget.nextSibling;
      if (nextSibling) {
        e.preventDefault();
        nextSibling.focus();
      }
      return;
    }
  }

  return (
    <aside 
      data-testid="info-panel" 
      id={`info-panel-${id}`}
      aria-label={`Block info about ${description}`}
      className={styles.panel}
      ref={panelRef}
      tabIndex={-1}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <h2 className={styles.heading}>Block info</h2>
      <dl>
        <dt className={styles.title}>ID:</dt>
        <dd className={styles.details}>{id}</dd>

        <dt className={styles.title}>Description:</dt>
        <dd className={styles.details}>{description}</dd>

        <dt className={styles.title}>Dimensions:</dt>
        <dd className={styles.details}>{dimensions}</dd>

        <dt className={styles.title}>Created at:</dt>
        <dd className={styles.details}>{createdAt}</dd>
      </dl>
    </aside>
  );
};
