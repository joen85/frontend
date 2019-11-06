import { ListContainer, SearchContainer, StoreDetailContainer, MyContainer, MItemContainer } from 'containers';

export const publicRoutes = [
  { /* LIST 페이지 */
    path: "/list",
    component: ListContainer
  },
  { /* SEARCH 페이지 */
    path: "/search",
    component: SearchContainer
  },
  { /* DETAIL 페이지 */
    path: "/detail",
    component: StoreDetailContainer
  },
  { /* 찜내역 mylist 페이지 */
    path: "/mylist",
    component: MyContainer
  },  
  { /* 예약하기 MItem 페이지 */
    path: "/mitem",
    component: MItemContainer
  },  
];