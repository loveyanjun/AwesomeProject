/** @format */

import {AppRegistry} from 'react-native';
// Geenie: 此处定义项目的入口
// import App from './App';
// import App from './src/modules/index'
import App from './src/projects/navigation/index'
// import App from './src/projects/tabNavigation/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
