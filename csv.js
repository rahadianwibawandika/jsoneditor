function convertJsonToCsv(json) {
  const csvRows = [];
  
  // Extract headers from the first object in the array
  const headers = Object.keys(json[0]);
  csvRows.push(headers.join(','));
  
  // Extract data from each object and format it as a CSV row
  json.forEach(obj => {
    const values = headers.map(header => {
      const value = obj[header];
      return JSON.stringify(value);
    });
    csvRows.push(values.join(','));
  });
  
  // Join all rows into a single string
  const csvString = csvRows.join('\n');
  
  return csvString;
}

module.exports = convertJsonToCsv;