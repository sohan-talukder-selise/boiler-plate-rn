import {_objectOfKey} from '../../types/common.types';
import {_userList} from '../../types/formatter/user.formatter.interface';

const userListFormatter = (item: _objectOfKey): _userList => {
  console.log('item', item);
  return {
    uid: 12,
  };
};

export {userListFormatter};
