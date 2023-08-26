function createAndDownloadCSV(chat: string, fileName: string) {
  const blob = new Blob([chat], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", `${fileName}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default createAndDownloadCSV;
