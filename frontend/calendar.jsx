import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store'
// import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }

// TESTING START
  // window.getState = store.getState;
  // // window.dispatch = store.dispatch;
  // // window.login = login
  // window.fetchProject = fetchProject;
  // window.fetchProjects = fetchProjects;
  // window.fetchCategory = fetchCategory;
//TESTING END

  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1>calendar</h1>, root);
})