import Vue from 'vue'
/**
	npm install babel-plugin-component -D
	{
	  "presets": [["es2015", { "modules": false }]],
	  "plugins": [
	    [
	      "component",
	      {
	        "libraryName": "element-ui",
	        "styleLibraryName": "theme-chalk"
	      }
	    ]
	  ]
	}
*/
import {
	Container,
	Header,
	Main,
	Row,
	Col,
	Button, 
	Menu,
  	Submenu,
  	MenuItem,
  	MenuItemGroup,
  	Tabs,
  	TabPane,
  	Breadcrumb,
  	BreadcrumbItem,
  	Steps,
  	Step
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Steps)
Vue.use(Step)

import { 
  	Loading,
  	Table,
  	TableColumn,
  	MessageBox,
	Message,
	Notification
} from 'element-ui'

Vue.use(Loading.directive);
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;