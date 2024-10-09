import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from '../../assets/ts/core.data';

const activityHeight = (): number => {
  const screenHeight = SCREEN_HEIGHT;
  const windowHeight = WINDOW_HEIGHT;
  const statusBarHeight = STATUS_BAR_HEIGHT || 0;
  return screenHeight - (windowHeight + statusBarHeight);
};

export {activityHeight};
