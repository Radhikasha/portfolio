import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    setError(error.message);
    console.error(error);
  }

  return (
    <div className="resume-page" style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1 className="gradient-heading">My Resume</h1>
      <a
        href="/afforrrd_resume.pdf"
        download
        style={{
          display: 'inline-block',
          padding: '12px 28px',
          background: '#007bff',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          marginTop: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        Download Resume
      </a>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        {error ? (
          <div style={{ color: 'red' }}>Failed to load PDF: {error}</div>
        ) : (
          <Document
            file="/afforrrd_resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div>Loading PDF...</div>}
            error={<div>Could not load PDF.</div>}
            noData={<div>No PDF file specified.</div>}
          >
            <Page pageNumber={1} />
          </Document>
        )}
      </div>
    </div>
  );
};

export default Resume;
