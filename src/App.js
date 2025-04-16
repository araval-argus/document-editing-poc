import React from 'react';
import DocumentEditor from './DocumentEditor';

function App() {
  // const documentUrl = 'https://nokdsta.blob.core.windows.net/local/nuggets/media/Hive_development_priorities.docx';

  const documentUrl = 'http://192.1.160.81:3000/Hive_development_priorities.docx';
  const docfileName = 'Hive Development Priorities';

  //const excelUrl = 'https://nokdsta.blob.core.windows.net/local/nuggets/media/Hive Developers.xlsx';
  //const excelUrl = 'http://192.1.125.89:3000/Hive Developers.xlsx';

  const excelFileName = 'Hive Developers';
  return (
    <div className="App">
      <h1>POC: Document editing</h1>

      <div className="editor-section">
        <h3>Docx File Demo</h3>
        <DocumentEditor
          name={docfileName}
          url={documentUrl}
          docKey={'16ddb34c-043e-459f-a4a6-d529ea832bi9'}
          userName={'Ajju Raval'}
          fileType={'docx'}
          elemId='docEditor'
        />
      </div>
    </div>

  );
}

export default App;
