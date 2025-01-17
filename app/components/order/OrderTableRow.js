import React from "react";
import { timeAgo } from "@/app/utils/helpers";
import { Tooltip } from "@mantine/core";
import Link from "next/link";

const OrderTableRow = ({  items,  order_id, total,  payment_success,  created_at }) => {


  return (
          <>
          <tr className="border-b md:border-r md:border-l table_row ">
            <td className="py-5 pl-3">
              <Tooltip label={order_id} >
             <h1 className="truncate w-20">{order_id}</h1>
             </Tooltip>
            </td>
            <td className="py-5 max-w-[200px]">
            <div className="">
              {items.map((item, i) => (
                  <Link key={i} href={`/products/${item.id}`}>
                   <h3  className="text-sm cursor-pointer hover:text-primary font-bold truncate line-clamp-1 text-title">
                   {item?.name } <span className="text-sm text-gray-500">( {item?.quantity} x)</span>
                   </h3>
                   </Link>
                 ) )}
              </div>
              </td>
            <td className="py-5">${total}</td>
            <td className="py-5">{timeAgo(created_at)} ago</td>
            <td className="py-5">
              {payment_success ? "success" : "failed"}
            </td>
            <td className="py-5">
                    {/* Order status */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <p className="text-sm text-yellow-500">Pending</p>
                    </div>
                </td>
            {/* <td className="py-5">
              <MdDelete onClick={removeCart} className="text-2xl  cursor-pointer" />
            </td> */}
          </tr> 
          </>
  );
};

export default OrderTableRow;
