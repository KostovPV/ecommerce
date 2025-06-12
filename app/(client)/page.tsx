import { Button } from "@/components/button";
import Container from "@/components/Container";
import { getSale } from "@/sanity/helpers";


export default async function Home() {
  const sales = await getSale();
  console.log(sales);
  return (
    <div>
      <Container className="py-20">
        <h2>Ecommerce</h2>
        <Button> Click me</Button>
      </Container>

    </div>
  );
}
