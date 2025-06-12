import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/button";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div>
      <Container className="py-20">
        <h2>Ecommerce</h2>
        <Button> Click me</Button>
      </Container>

    </div>
  );
}
