import React, { useEffect } from 'react';

const generateRandomUser = (userName) => {
  const userId = `user-${Math.floor(Math.random() * 100000)}`;
  const randomName = `${userName}-${Math.floor(Math.random() * 100)}`;
  return {
    id: userId,
    name: randomName,
    group: 'editors',
  };
};

const DocumentEditor = ({ name, url, docKey, userName, fileType, elemId }) => {
  useEffect(() => {
    const user = generateRandomUser(userName);

    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (window.DocsAPI) {
          return resolve(); // Already loaded
        }

        const script = document.createElement('script');
        script.src = 'http://localhost:8080/web-apps/apps/api/documents/api.js'; // <-- Replace with your actual server path
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('OnlyOffice script load failed'));
        document.body.appendChild(script);
      });
    };

    loadScript().then(() => {
      const editorConfig = {
        document: {
          fileType: fileType,
          key: docKey,
          title: name,
          url: url,
        },
        documentType: 'word',
        editorConfig: {
          callbackUrl: '', // Set your save endpoint
          user: user,
          customization: {
            compactToolbar: false,
            chat: true,
            collaborativeEditing: true,
            mode: 'fast',
            review: true,
          },
          events: {
            onSave: function () {
              const updatedDocument = window.docEditor.getDocData?.();
              console.log("Save triggered. Implement your save logic here.", updatedDocument);
              // Add save logic as needed
            },
          },
        },
        height: '100%',
        width: '100%',
      };

      window.docEditor = new window.DocsAPI.DocEditor(elemId, editorConfig);
    }).catch((err) => {
      console.error('Error loading OnlyOffice:', err);
    });
  }, [name, url, docKey, userName, fileType, elemId]);

  return <div id={elemId} style={{ width: '100%', height: '600px' }}></div>;
};

export default DocumentEditor;
