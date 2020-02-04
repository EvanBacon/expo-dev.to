import { createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';

export default createSwitchNavigator(
  {
    home: Home,
    search: Search,
    profile: Profile,
  },
  {}
);
