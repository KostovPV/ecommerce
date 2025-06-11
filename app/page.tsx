import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <div>
      <Container>
        <h2>Ecommerce</h2>
        <Button> Click me</Button>
      </Container>

    </div>
  );
}
