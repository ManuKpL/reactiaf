export const collectCoverageFrom = currentConfig => {
  const additionalValues = ['!src/index.js', '!src/serviceWorker.js'];
  return currentConfig ? currentConfig.concat(additionalValues) : additionalValues;
};
