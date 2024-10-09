import rootApi from '../../../controllers/api/root-api-handler/rootApi.api';
import eventEndPoint from '../../api-end-point/eventEndPoint';

class EventsServiceClass {
  async discoverEventList(payload: any) {
    const {query, page, perPage, status} = payload || {
      query: '',
      page: 1,
      perPage: 10,
      status: '',
    };
    const params = `$query=${query}&page=${page}&perPage=${perPage}&status=${status}`;
    console.log(params);
    return rootApi('POST', eventEndPoint.discoverEvent);
  }
  async create(payload: any) {
    return rootApi('POST_FROM_DATA', eventEndPoint.create, payload);
  }
}

const EventsService = new EventsServiceClass();
export default EventsService;
