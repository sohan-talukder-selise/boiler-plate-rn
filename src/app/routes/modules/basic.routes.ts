import Home from '../../modules/splash/Home.module';
import Splash from '../../modules/splash/Splash.module';
import {_routeProps} from '../../types/common.types';
import {screens} from '../routeName.routes';

const basicRoutes: Array<_routeProps> = [
  {
    accessLabel: 0,
    component: Splash,
    isHide: false,
    name: screens.splash,
  },
  {
    accessLabel: 0,
    component: Home,
    isHide: false,
    name: screens.home,
  },
];

export default basicRoutes;
