import ProductDetails from '@/app/components/Products/ProductDetails'
import ProductMoreInfo from '@/app/components/Products/ProductMoreInfo'
import { DEALS, ESSENTIAL } from '@/app/data/products';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Products = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const allProducts = [...DEALS, ...ESSENTIAL, ]
  useEffect(() => {
    const getProduct = async () => {
      const currentProduct = allProducts.find((item) => item.id === Number(id));
      setProduct(currentProduct || null)
    }
    getProduct();
  }, [id])
  return (
    <>
      <ProductDetails product={product} />
      <ProductMoreInfo product={product} />
    </>
  )
}

export default Products