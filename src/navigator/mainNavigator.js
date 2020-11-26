import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList1178822Navigator from '../features/ArticleList1178822/navigator';
import CalendarView2178821Navigator from '../features/CalendarView2178821/navigator';
import EmailAuth3178820Navigator from '../features/EmailAuth3178820/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList1178822: { screen: ArticleList1178822Navigator },
CalendarView2178821: { screen: CalendarView2178821Navigator },
EmailAuth3178820: { screen: EmailAuth3178820Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
