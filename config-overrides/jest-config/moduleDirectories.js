export const moduleDirectories = currentConfig => {
  const additionalValues = ['node_modules', 'src'];
  return currentConfig ? currentConfig.concat(additionalValues) : additionalValues;
};
