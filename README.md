
## react-native-viewpager-indicator
修改自react-native-scrollable-tab-view，增加了根据文字内容适配下划线长度的功能。

## Preview

<img src="./imgs/example.jpg" width="360" />
<p>
<img src="./imgs/ios.gif" width="360" />
<img src="./imgs/android.gif" width="360" />
<p>

## Build and run the demo
基础用法，详细见examples

```
cd example
npm install
npm run-ios
npm start
```


## Basic usage
```
npm install react-native-viewpager-indicator --save
```

```javascript
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

## Contact

QQ:1196681436

Weibo:http://www.weibo.com/u/1693069642

email:jackuhan@gmail.com

Welcome to pull request

**MIT Licensed**
