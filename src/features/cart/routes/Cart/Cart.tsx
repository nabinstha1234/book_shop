import React from 'react';
import { Table, Image, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useAppSelector } from 'app/hooks';

import { getAllCartItem, ICartItem } from '../../Slice/cartSlice';

interface Props {}

export const Cart = (props: Props) => {
  let cartItems = useAppSelector(getAllCartItem);

  const getTotalPirce = (): number => {
    return cartItems.reduce((acc: any, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Image</th>
            <th>Book Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: ICartItem, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Image src={item.image} height="100" width="70" />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>Rs. {item.price}</td>
              <td>
                <div className="d-flex">
                  <button className="btn btn-primary text-white mr-1">-</button>
                  <input type="text" className="form-control mr-1" />
                  <button className="btn btn-primary text-white mr-">+</button>
                  <Icon icon="mdi:delete text-parimary" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <div>Total: Rs.{getTotalPirce()}</div>
      </div>
      <Button className="float-right" disabled={cartItems.length < 1}>
        Checkout
      </Button>
    </div>
  );
};
