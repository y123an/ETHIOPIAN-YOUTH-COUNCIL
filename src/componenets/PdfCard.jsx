const PdfCard = ({ name, img, id, data, fileName }) => {
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    buffer.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  };

  const handleDownload = () => {
    // Convert Uint8Array to Blob
    const pdfBlob = new Blob([new Uint8Array(data)], {
      type: "application/pdf",
    });

    // Create a download link and trigger the download
    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(pdfBlob);
    downloadLink.href = url;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="hover:-translate-y-5 delay-75 duration-150">
        <img
          src={`data:image/jpeg;base64,${arrayBufferToBase64(img)}`}
          alt="Image from Database"
          className="w-[200px] shadow-lg shadow-primary"
        />
      </div>
      <div className="bg-white shadow-md p-5 shadow-primary flex flex-col justify-center rounded-lg items-center -mt-[20px] z-10">
        <div>
          <p className="">{name}</p>
        </div>
        <div className="flex ">
          <button
            onClick={handleDownload}
            className="p-2 bg-primary text-white rounded-lg"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;
