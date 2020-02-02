import { requestAdapter } from './adapter';
import { fetchingError } from './errorMessages';

export const ApiService = (() => {
  const treatErrorAsDefault = (message, defaultValue = null) => {
    return error => {
      console.error(message, error);
      return { data: defaultValue };
    };
  };

  return new (class ApiService {
    constructor(adapter) {
      this.client = adapter;
    }

    async get(resourcePath, defaultValue = null) {
      const errorMessage = () => fetchingError(resourcePath);

      const { data = defaultValue } = await this.client
        .get(resourcePath)
        .catch(treatErrorAsDefault(errorMessage(), defaultValue));

      return data || defaultValue;
    }
  })(requestAdapter);
})();
