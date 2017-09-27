const React = require('react');
const {
  PropTypes,
  Component,
} = React;
const { ViewPropTypes } = ReactNative = require('react-native');
const {
  View,
  Animated,
  ScrollView,
  StyleSheet,
  InteractionManager,
  ViewPagerAndroid,
} = ReactNative;
const TimerMixin = require('react-timer-mixin');
const ScrollableIndicator = require('./ScrollableIndicator');

const ScrollableViewPager = React.createClass({
  statics: {
    ScrollableIndicator,
  },

  propTypes: {
    tabBarPosition: PropTypes.oneOf(['top', 'bottom' ]),
    initialPage: PropTypes.number,
  //   page: PropTypes.number,
  //   onChangeTab: PropTypes.func,
  //   onScroll: PropTypes.func,
    renderTabBar: PropTypes.any,
  //   style: View.propTypes.style,
  //   contentProps: PropTypes.object,
  //   scrollWithoutAnimation: PropTypes.bool,
  //   locked: PropTypes.bool,
  //   prerenderingSiblingsNumber: PropTypes.number,
  },

  getDefaultProps() {
    return {
      tabBarPosition: 'top',
      initialPage: 0,
      page: -1,
      onChangeTab: () => {},
      onScroll: () => {},
      contentProps: {},
      scrollWithoutAnimation: false,
      locked: false,
      prerenderingSiblingsNumber: 0,
    };
  },

  getInitialState() {
    const width = ScreenWidth;
    return {
      currentPage: this.props.initialPage,
      scrollX: new Animated.Value(0),
      scrollValue: new Animated.Value(this.props.initialPage),
      containerWidth: width,
    };
  },

  _children(children = this.props.children) {
    return React.Children.map(children, (child) => child);
  },

  onPageSelected: function(e) {
    this.state.scrollValue.setValue(e.nativeEvent.position);
    this.props.onScroll(e.nativeEvent.position);
    this.setState({page: e.nativeEvent.position,currentPage:e.nativeEvent.position});
  },

  onPageScroll: function(e) {
    this.setState({scrollX: e.nativeEvent});
  },

  onPageScrollStateChanged: function(state : ViewPagerScrollState) {
    this.setState({scrollState: state});
  },

  renderScrollableContent() {
    return <ViewPagerAndroid style={[styles.container, this.props.style]}
                             initialPage={0}
                             onPageScroll={this.onPageScroll}
                             onPageSelected={this.onPageSelected}
                             onPageScrollStateChanged={this.onPageScrollStateChanged}
                             ref={viewPager => { this.viewPager = viewPager; }}

    >
      { this.props.children}
    </ViewPagerAndroid>;
  },

  renderTabBar(props) {
    if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(props), props);
    } else {
      return null;
    }
  },

  componentWillReceiveProps(props) {
    if (props.page >= 0 && props.page !== this.state.currentPage) {
      this.goToPage(props.page);
    }
  },

  updateSceneKeys({ page, children = this.props.children, callback = () => {}, }) {
    let newKeys = this.newSceneKeys({ previousKeys: this.state.sceneKeys, currentPage: page, children, });
    this.setState({currentPage: page, sceneKeys: newKeys, }, callback);
  },

  goToPage(pageNumber, animated = !this.props.scrollWithoutAnimation) {

    if (animated) {
      this.viewPager.setPage(pageNumber);
    } else {
      this.viewPager.setPageWithoutAnimation(pageNumber);
    }

    this.setState({currentPage: pageNumber});
  },

  render() {
    let tabBarProps = {
      goToPage: this.goToPage,
      tabs: this._children().map((child) => child.props.tabLabel),
      activeTab: this.state.currentPage,
      scrollX: this.state.scrollX,
      scrollValue: this.state.scrollValue,
      containerWidth: this.state.containerWidth,
    };

    if (this.props.tabBarBackgroundColor) {
      tabBarProps.backgroundColor = this.props.tabBarBackgroundColor;
    }
    if (this.props.tabBarActiveTextColor) {
      tabBarProps.activeTextColor = this.props.tabBarActiveTextColor;
    }
    if (this.props.tabBarInactiveTextColor) {
      tabBarProps.inactiveTextColor = this.props.tabBarInactiveTextColor;
    }
    if (this.props.tabBarTextStyle) {
      tabBarProps.textStyle = this.props.tabBarTextStyle;
    }

    return <View style={[styles.container]} >
      {this.props.tabBarPosition === 'top' && this.renderTabBar(tabBarProps)}
      {this.renderScrollableContent()}
      {(this.props.tabBarPosition === 'bottom') && this.renderTabBar(tabBarProps)}
    </View>;
  },
});

module.exports = ScrollableViewPager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableContentAndroid: {
    flex: 1,
  },
});
