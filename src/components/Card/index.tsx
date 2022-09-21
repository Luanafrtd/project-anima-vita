import { Container, Title, Description, Image } from "./styles";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <Container>
      <Image src={props.image} />
      <div>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </div>
    </Container>
  );
}
