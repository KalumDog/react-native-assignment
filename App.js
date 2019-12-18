import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TestScreen from './src/screen/TestScreen'
import PlaceScreen from './src/screen/PlaceScreen'

const AppNavigator = createStackNavigator({
  Test: {
    screen: TestScreen,
  },
  Place: {
    screen: PlaceScreen,
  },
});

export default createAppContainer(AppNavigator);;
