import { ApiService } from 'shared/api/service';

export const ListHousesService = (() => {
  const HOUSES_RESOURCE = 'houses';

  return class ListHousesService {
    constructor(apiService) {
      this.apiService = apiService || ApiService;
    }

    async exec() {
      return this.apiService.get(HOUSES_RESOURCE);
    }
  };
})();
