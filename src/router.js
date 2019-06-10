import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

import Log from "./components/Log.vue"

import Home from "./components/home/Home.vue"

import Myhome from "./components/myhome/Myhome.vue"
import Team from "./components/team/Team.vue"
import About from "./components/myhome/About.vue"
import Bull from "./components/myhome/Bull.vue"
import BullInfo from "./components/myhome/BullInfo.vue"
import Self from "./components/myhome/Self.vue"
import Call from "./components/myhome/Call.vue"
import Help from "./components/myhome/Help.vue"
import Deallist from "./components/myhome/Deallist.vue"
import Referrer from "./components/myhome/Referrer.vue"
import Upload from "./components/myhome/Upload.vue"

import Deal from "./components/deal/Deal.vue"
import Succeedb from "./components/deal/Succeedb.vue"
import Not from "./components/temps/Not.vue"

import Mill from "./components/mill/Mill.vue"
import Millpage from "./components/mill/Millpage.vue"


import Shuang from "./components/wu/Shuang.vue"
import Uinfo from "./components/wu/Uinfo.vue"
import Bulltext from "./components/wu/Bulltext.vue"
import Wrong from "./components/wu/Wrong.vue"
import WrongInfo from "./components/wu/WrongInfo.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Log},
    {path:'/Log',component:Log},
    {path:'/Home',component:Home},
    {path:'/Myhome',component:Myhome},
    {path:'/About',component:About},
    {path:'/Bull',component:Bull},
    {path:'/BullInfo',component:BullInfo},
    {path:'/Self',component:Self},
    {path:'/Call',component:Call},
    {path:'/Help',component:Help},
    {path:'/Referrer',component:Referrer},
    {path:'/Upload',component:Upload},
    {path:'/Deallist',component:Deallist},
    {path:'/Deal',component:Deal},
    {path:'/Succeedb',component:Succeedb},
    {path:'/Team',component:Team},
    {path:'/Mill',component:Mill},
    {path:'/Millpage',component:Millpage},
    
    {path:'/Shuang',component:Shuang},
    {path:'/Uinfo',component:Uinfo},
    {path:'/Bulltext',component:Bulltext},
    {path:'/Wrong',component:Wrong},
    {path:'/WrongInfo',component:WrongInfo},
    {path:'/*',component:Not}
    
  ]
})
