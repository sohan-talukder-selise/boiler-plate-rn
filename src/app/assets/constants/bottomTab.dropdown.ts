import {screens} from '../../routes/routeName.routes';
import EmptyTabScreen from '../../components/empty-content/EmptyTabScreen';
import {_bottomTabInterface} from '../../components/bottom-tab/interface';
import Dashboard from '../../modules/dashboard';
import CollectionIndex from '../../modules/collections';
import HomeIcon from '../icons/Home.icon.assets';
import ExploreIcon from '../icons/Explore.icon.assets';
import ProfileIcon from '../icons/Profile.icon.assets';
import CollectionIcon from '../icons/Collection.icon.assets';
const bottomTabDropdown: _bottomTabInterface[] = [
  {
    Icon: HomeIcon,
    name: 'Home',
    route: screens.dashboard,
    Component: Dashboard,
  },
  {
    Icon: ExploreIcon,
    name: 'Explore',
    route: screens.dataPrivacy,
    Component: CollectionIndex,
  },
  {
    Icon: CollectionIcon,
    name: 'Collections',
    route: screens.onboarding,
    Component: EmptyTabScreen,
  },
  {
    Icon: ProfileIcon,
    name: 'Profile',
    route: screens.profile,
    Component: EmptyTabScreen,
  },
];

export {bottomTabDropdown};
