import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/header.vue';
export const routes = [
  {
    path: '',
    components: { default: Home, 'header-top': Header },
    name: 'home'
  },
  {
    path: '/user',
    components: { default: User, 'header-bottom': Header },
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  },
  // Redirect (hard coded)
  {
    path: '/redirect-me',
    redirect: { name: 'home' }
  },
  // Redirect Practical Example:
  {
    path: '*',
    redirect: { name: 'home' }
  }
];
