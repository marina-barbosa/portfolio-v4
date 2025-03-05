export const handleDownload = () => {
    console.log("Download CV");
    const link = document.createElement("a");
    link.href = "../../public/cv-marina-barbosa.docx";
    link.download = "cv-marina-barbosa.docx"; 
    link.click();
  };