import { Order } from "./order.model";

export const OrdersProviders = [
    {
        provide: 'ORDERS_REPOSITORY',
        useValue: Order,
    }, 
];