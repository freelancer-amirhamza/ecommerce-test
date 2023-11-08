
import AdminMain from "@/admin/components/deshboard";
import EssentialProducts from "@/app/components/Home/EssentialProducts";
import FeatureBrands from "@/app/components/Home/FeatureBrands";
import HealthDaily from "@/app/components/Home/HealthDaily";
import HomeCategory from "@/app/components/Home/HomeCategory";
import HomeHero from "@/app/components/Home/HomeHero";
import HomePosters from "@/app/components/Home/HomePosters";
import TodaysDeles from "@/app/components/Home/TodaysDeles";
import { getPageServer, setBackgroundImage } from "@/app/utils/helpers";




export default function Home({page}) {

  if (page === 'admin') return <AdminMain/>

  return (
    <>
      
      <HomeHero />
      <HomeCategory />
      <FeatureBrands />
      <TodaysDeles />
      <HomePosters />
      <div className="py-5" style={setBackgroundImage("/image/bg-hero.webp",
        { backgroundPosition: 'bottom center', backgroundColor: '#f3f3f3', backgroundSize: 'cover' })}>
        <EssentialProducts />
        <HealthDaily />
      </div>

    </>
  )
}

export async function getServerSideProps(context) {
  let page
  const { req } = context;
  if (req) {
    let host = req.headers.host
    page = getPageServer(host) || null
  }
  return {
    props: {
      page: page
    },
  }
}
