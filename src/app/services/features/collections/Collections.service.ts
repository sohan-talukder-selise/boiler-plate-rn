import {config} from '../../../../config';
import dummyData from '../../../controllers/local-data/dummyData';
import {dummyDataFormat} from '../../../controllers/local-data/dummyDataFormat';
import {sleepHook} from '../../../helper/hooks/sleep.hook';
import {
  _isGetting,
  _unformattedApiResponse,
} from '../../../types/redux/commonState.types';

class CollectionsServicesClass {
  // :GET collections list
  async getList(payload: _isGetting) {
    const {page, perPage} = payload || {
      page: 1,
      perPage: 10,
    };
    // for call for development version
    if (config.development) {
      // for sleep 2 seconds
      await sleepHook(() => {}, 2000);
      // read data from local data
      const object: _unformattedApiResponse = {
        ...dummyData.collections['collections/list'],
      };
      // format data and return
      return dummyDataFormat({
        ...object,
        data: object.data.splice(
          page === 1 ? 0 : page || 0 * (perPage || 10 + 1),
          perPage,
        ),
      });
    }
  }
}

const CollectionsServices = new CollectionsServicesClass();
export default CollectionsServices;
