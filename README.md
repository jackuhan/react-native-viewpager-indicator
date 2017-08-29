
## react-native-viewpager-indicator
修改自react-native-scrollable-tab-view，增加了根据文字内容适配下划线长度的功能。


## example
基础用法，详细见examples

```javascript
cd examples
npm install
npm run-ios
npm start
```


## Basic usage
```javascript
1. Run `npm install react-native-scrollable-tab-view --save`
2. `var ScrollableTabView = require('react-native-scrollable-tab-view');`

var ScrollableTabView = require('react-native-viewpager-indicator');

var App = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <Page tabLabel="React" />
        <Page tabLabel="Flow" />
        <Page tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
});
```



**MIT Licensed**
