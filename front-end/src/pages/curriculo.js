import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Styles from '../styles/curriculo.module.css';
import Pdf from '../media/igorMendes.pdf';
import Me from '../media/me.jpeg';
import MainButtonsNav from '../components/mainButtonsNav';

export default function Curriculo() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [pageNumber, setPageNumber] = useState(1);

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  function onDocumentLoadSuccess() {
    setPageNumber(1);
  }

  return (
    <div className={Styles.curriculoContainer}>
      <img alt="homem sorrindo" src={Me} className={Styles.me} />
      <MainButtonsNav />
      <Document
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
        }}
        className={Styles.curriculo}
        file={Pdf}
        onLoadSuccess={(e) => onDocumentLoadSuccess(e)}
      >
        <Page pageNumber={pageNumber} height={1000} />
      </Document>
    </div>
  );
}
