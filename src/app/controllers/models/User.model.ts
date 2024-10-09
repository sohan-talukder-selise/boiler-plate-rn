import {_objectOfKey, _status} from '../../types/common.types';

class UserModel {
  STATUS_INACTIVE: _status = 0;
  STATUS_ACTIVE: _status = 1;

  status_title: _objectOfKey = {
    [this.STATUS_ACTIVE]: 'Active',
    [this.STATUS_INACTIVE]: 'Inactive',
  };

  getStatus(status: _status): string {
    return this.status_title[status];
  }
}

const User = new UserModel();
export default User;
