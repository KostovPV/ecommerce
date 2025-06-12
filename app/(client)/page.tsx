import { Button } from "@/components/button";
import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import { getSale } from "@/sanity/helpers";


export default async function Home() {
  const sales = await getSale();
  
  return (
    <div>
      <DiscountBanner sales={sales} />
    </div>
  );
}
