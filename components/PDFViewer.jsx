import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfPath, onError }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => {
          console.error("Error loading PDF:", error);
          if (onError) onError(error);
        }}
      >
        <Page 
          pageNumber={pageNumber} 
          renderMode="svg"
          width={600}
        />
      </Document>
      {numPages && (
        <div style={{ marginTop: '10px' }}>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            style={{ marginRight: '10px' }}
          >
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            style={{ marginLeft: '10px' }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
