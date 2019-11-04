import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from 'store';
import App from 'App';
import { publicRoutes } from 'routes';
import { MenuContainer } from 'containers';
import { MainHeader, MainFooter } from 'components';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

/** [시작부분] */

//화면 이동을 위한 Route 설정
const Routers = () => (
      <div>
        <Route exact path="/" component={App} />
          {
            publicRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })
          }
      </div>
);

//화면 그리기
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainHeader/>               {/* 헤더영역 */}
          <Routers history={history}/>{/* 콘텐츠영역 */}
          <MenuContainer/>            {/* 메뉴영역 */}
          {/*<MainFooter/>                푸터영역 */}
        </div>
    </BrowserRouter>
   </Provider>
  , rootElement);
