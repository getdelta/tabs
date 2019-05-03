/* @flow */
/* eslint-disable import/no-commonjs */

module.exports = {
  /**
   * Navigators
   */
  get createMaterialTopTabNavigator() {
    return require('./navigators/createMaterialTopTabNavigator').default;
  },

  /**
   * Views
   */
  get MaterialTopTabBar() {
    return require('./views/MaterialTopTabBar').default;
  },

  /**
   * Utils
   */
  get createTabNavigator() {
    return require('./utils/createTabNavigator').default;
  },
};
