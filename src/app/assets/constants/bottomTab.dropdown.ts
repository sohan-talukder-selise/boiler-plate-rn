import {screens} from '../../routes/routeName.routes';
import HomeIcon from '../icons/HomeIcon.assets';
import CartIcon from '../icons/CartIcon.assets';
import AddIcon from '../icons/AddIcon.assets';
import EmptyTabScreen from '../../components/empty-content/EmptyTabScreen';
import {_bottomTabInterface} from '../../components/bottom-tab/interface';
import Dashboard from '../../modules/dashboard';
const bottomTabDropdown: _bottomTabInterface[] = [
  {
    Icon: HomeIcon,
    route: screens.dashboard,
    Component: Dashboard,
  },
  {
    Icon: CartIcon,
    route: screens.profile,
    Component: EmptyTabScreen,
  },
  {
    Icon: AddIcon,
    route: screens.onboarding,
    Component: EmptyTabScreen,
  },
];

export {bottomTabDropdown};
