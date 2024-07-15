self.onmessage = function(e) {
  const { data, timeData, pressureData } = e.data;

  timeData.push(new Date());
  pressureData.push(data);

  // Keep only the last 10 points
  if (timeData.length > 10) {
    timeData.splice(0, timeData.length - 10);
    pressureData.splice(0, pressureData.length - 10);
  }

  self.postMessage({ timeData, pressureData });
};
