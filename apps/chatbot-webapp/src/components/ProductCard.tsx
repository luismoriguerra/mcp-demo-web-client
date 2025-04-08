import Image from 'next/image';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {description}
        </p>
        <p className="text-lg font-bold mt-2">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
} 