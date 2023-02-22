import { ClientLayout, BasicLayout } from "../layouts";
import { SelectTable } from "../pages/Client/SelectTable/SelectTable";
import { Categories } from "../pages/Client/Categories";
import { Products } from "../pages/Client/Products";
import { Cart } from "../pages/Client/Cart";
import { OrdersHistory } from "../pages/Client/OrdersHistory";

const routesClient = [
  {
    path: "/",
    layout: BasicLayout,
    component: SelectTable,
    exact: true,
  },
  {
    path: "/client/:tableNumber",
    layout: ClientLayout,
    component: Categories,
    exact: true,
  },
  {
    path: "/client/:tableNumber/cart",
    layout: ClientLayout,
    component: Cart,
    exact: true,
  },
  {
    path: "/client/:tableNumber/orders",
    layout: ClientLayout,
    component: OrdersHistory,
    exact: true,
  },
  {
    path: "/client/:tableNumber/:idCategory",
    layout: ClientLayout,
    component: Products,
    exact: true,
  },
];

export default routesClient;