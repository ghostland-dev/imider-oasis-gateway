import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard = ({ children, delay = 0, className = "" }: AnimatedCardProps) => {
  return (
    <Card
      className={`hover-lift opacity-0 ${className}`}
      style={{
        animation: `cardEntrance 0.5s ease-out ${delay}ms forwards`,
      }}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;
