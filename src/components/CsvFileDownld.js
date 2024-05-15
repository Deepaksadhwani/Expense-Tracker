import React from "react";
import { createObjectCsvWriter } from "csv-writer";
import toast from "react-hot-toast";

const CSVDownloader = ({headers = [], filename = "data.csv" }) => {

  const downloadCSV = () => {
    const csvWriter = createObjectCsvWriter({
      path: filename,
      header: headers,
    });

    csvWriter.writeRecords(data).then(() => {
      toast.success("File Downloaded.");
    });
  };

  return <button onClick={downloadCSV}>Download CSV</button>;
};

export default CSVDownloader;
