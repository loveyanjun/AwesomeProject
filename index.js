/** @format */

import {AppRegistry} from 'react-native';
import { createAppContainer } from 'react-navigation'
// Geenie: 此处定义项目的入口
// import App from './App';
// import App from './src/modules/index'
// import App from './src/projects/navigation/index'
// import App from './src/projects/tabNavigation/index'
// import App from './src/app/index'
// import App from './src/test-component/index'

// react-navigation升级到3.0
import App from './src/projects/testNavigation/index'
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
