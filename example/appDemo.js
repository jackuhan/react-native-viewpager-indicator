import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-viewpager-indicator';
import Page from './Page';

const appDemo = React.createClass({

  render() {
    let body;

    body = <ScrollableTabView
                tabBarUnderlineColor="#ee394b"
                tabBarActiveTextColor="#ee394b"
                tabBarInactiveTextColor = {'#333333'}
                tabBarTextStyle = {{paddingBottom:0,fontSize:13,marginTop:0}}
                tabBarUnderlineStyle = {{backgroundColor: '#ee394b', height: 1,}}
                renderTabBar={() => <ScrollableTabBar
                                 tabsContainerStyle={styles.tabbarContainer}
                                 tabStyle={styles.tab}
                                 tabPadding={tabPadding}
                                 underlineAlignText={true}
                                 />}
            >
              {classifies.map(function (item, i) {
                return (
                    <Page classify={item.id} tabLabel={item.title}/>
                );
              })}
            </ScrollableTabView>


    return (
        <View style={styles.page}>
          {body}
        </View>


    );
  }
});


const tabPadding = 18;
var styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop:20,//statusBar
    backgroundColor: '#f0f0f0'
  },
  //整个页面居中
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',//左右居中
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  tabbarContainer: {
    height: 40,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#dddddd',
    backgroundColor:'white',
  },
  tab: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: tabPadding,
    paddingRight: tabPadding,
  },

});

export default appDemo


var classifies = [
  {
    id: 0,
    title: "全部",
  },
  {
    id: 24,
    title: "今日新品",
  },
  {
    id: 13,
    title: "数码产品",
  },
  {
    id: 17,
    title: "居家百货",
  },
  {
    id: 12,
    title: "西洋好货",
  },
  {
    id: 34,
    title: "京东直供",
  },
  {
    id: 35,
    title: "热剧周边",
  },
  {
    id: 14,
    title: "追剧美食",
  },
  {
    id: 26,
    title: "潮妆时尚",
  },
  {
    id: -1,
    title: "明日秒杀",
  }
];
