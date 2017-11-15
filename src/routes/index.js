import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation'

import Home from '../views/home/home'
import Chat from '../views/chat/chat'
import Profile from '../views/profile/profile'
import SideBar from '../views/side-bar/index'

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Home },
    Chat: { screen: Chat },
    Profile: { screen: Profile },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
)

export default HomeScreenRouter