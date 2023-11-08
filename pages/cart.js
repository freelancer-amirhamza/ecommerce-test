import CartActions from "@/app/components/cart/CartActions";
import CartTable from "@/app/components/cart/CartTable";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import { selectItems } from "@/app/redux/slices/basketSlice";
import { useSelector } from "react-redux";


const cart = () => {
  const cartItems = useSelector(selectItems)

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-[#F5F5F5] py-5">
        <div className="mx-auto max-w-5xl ">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          />
        </div>
      </div>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">
            Cart
          </h1>
          {cartItems.length > 0 ? (
            <>
              <CartTable />
              <CartActions />
            </>
          ) : (
            <>
              <img className="mx-auto w-1/3" src="/image/emptycart.png" alt="" />
              <h2 className="text-center ml-10 text-2xl font-bold my-5">Your Cart is Empty </h2>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default cart;
