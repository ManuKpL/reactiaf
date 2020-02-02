import { ApiService } from 'shared/api/service';

const HOUSES_RESOURCE = 'houses';

export class ListHousesService {
  constructor(apiService) {
    console.log('build list houses service');
    this.apiService = apiService || ApiService;
  }

  async exec() {
    return this.apiService.get(HOUSES_RESOURCE);
  }
}
