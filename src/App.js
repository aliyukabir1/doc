import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function App() {
  const docs = [
   // { uri: "https://url-to-my-pdf.pdf" }, // Remote file
   { uri: 'https://www.africau.edu/images/default/sample.pdf', fileType:'pdf'}, // Local File
   { uri: 'a.pdf', fileType:'pdf'}, // Local File
   { uri: 'a.pptx', fileType:'pptx'}, // Local File
   { uri: 'a.docx', fileType:'docx'}, // Local File
   { uri: 'a.xls', fileType:'xls'}, // Local File
  ];

  return <DocViewer
  config={{ header: {
     disableHeader: false,
      disableFileName: false,
    retainURLParams:false
    },  }}
  documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default App;
