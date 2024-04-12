import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './CV.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Master's in AI and Bachelor's in Biomedical Engineering @ <a href='http://www.dia.fi.upm.es/masteria/'>UPM, Madrid.</a>.</li>
        <li><span role="img" aria-label="book">📖</span> Notable achievements include publication in <a href='http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6437'>SEPLN</a> and high-impact tech support projects.</li>
        <li><span role="img" aria-label="laptop">💻</span> Current Data Scientist role at Kairos DS - Cepsa, impacting pricing strategy, preventive maintenance and more. </li>
        <li><span role="img" aria-label="test">📝</span> Holds certifications in AWS, Google, Neo4j, and Microsoft, with expertise in Python, AWS, GCP, and NLP. </li>
      </ul>
      <br/>
      <center>
        <h3>CV (<a href={myResume} download="CV_Alvaro_Alonso.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;