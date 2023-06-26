import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import {
  Button,
  Row,
  Col,
  Switch,
  Carousel,
  CarouselItem,
  Card,
  Container,
  Main,
  Aside,
  Icon,
  DatePicker,
  Badge,
  Notification,
  Backtop,
  Breadcrumb,
  BreadcrumbItem,
  Empty,
  Skeleton,
  SkeletonItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Dialog,
  Form,
  Input,
  FormItem,
  Select,
  Option,
} from "element-ui";
Vue.config.productionTip = false;
Vue.prototype.$ = $;

Vue.use(Button);
Vue.use(Row);
Vue.use(Switch);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Card);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Icon);
Vue.use(DatePicker);
Vue.use(Badge);
Vue.use(Backtop);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Empty);
Vue.use(Skeleton);
Vue.use(SkeletonItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);

// 全局挂载 Message
Vue.prototype.$notify = Notification;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
