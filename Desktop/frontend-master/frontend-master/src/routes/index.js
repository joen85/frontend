import { ListContainer, SearchContainer, StoreDetailContainer, MyContainer } from 'containers';

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
];