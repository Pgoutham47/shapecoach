
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Search, Filter, Star, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Protein Powder - Vanilla",
    category: "supplements",
    rating: 4.8,
    price: 39.99,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c1a44d548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvdGVpbiUyMHBvd2RlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium whey protein with 25g protein per serving. Low in sugar and carbs."
  },
  {
    id: "2",
    name: "Foam Roller",
    category: "equipment",
    rating: 4.5,
    price: 24.99,
    image: "https://images.unsplash.com/photo-1598289431512-b98916051263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9hbSUyMHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "High-density foam roller for muscle recovery and myofascial release."
  },
  {
    id: "3",
    name: "Resistance Bands Set",
    category: "equipment",
    rating: 4.6,
    price: 29.99,
    image: "https://images.unsplash.com/photo-1598575468023-21d738c7c4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc2lzdGFuY2UlMjBiYW5kc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Set of 5 resistance bands with varying levels of resistance for full-body workouts."
  },
  {
    id: "4",
    name: "BCAAs - Berry Blast",
    category: "supplements",
    rating: 4.3,
    price: 32.99,
    image: "https://images.unsplash.com/photo-1579722820308-d3c6c8e1d4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cHBsZW1lbnRzfGVufDB8fDB8fHww",
    description: "Branched-chain amino acids for muscle recovery and growth. Great berry flavor."
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    category: "accessories",
    rating: 4.7,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Sweat-resistant wireless earbuds with 8-hour battery life. Perfect for workouts."
  },
  {
    id: "6",
    name: "Shaker Bottle",
    category: "accessories",
    rating: 4.4,
    price: 12.99,
    image: "https://images.unsplash.com/photo-1593751778177-5a79dcee87b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hha2VyJTIwYm90dGxlfGVufDB8fDB8fHww",
    description: "BPA-free shaker bottle with mixing ball for smooth protein shakes."
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-white text-lg">{product.name}</CardTitle>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
            <span className="text-white text-sm ml-1">{product.rating}</span>
          </div>
        </div>
        <CardDescription className="text-gray-400">{product.category}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-300 text-sm mb-2">{product.description}</p>
        <p className="text-brand-yellow font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                Shop
              </h1>
              <p className="text-gray-300">
                Discover the best fitness gear and supplements recommended for your plan
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold md:w-auto">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart (0)
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="bg-brand-blue/50 border border-white/10 w-full justify-start">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  All Products
                </TabsTrigger>
                <TabsTrigger
                  value="supplements"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Supplements
                </TabsTrigger>
                <TabsTrigger
                  value="equipment"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Equipment
                </TabsTrigger>
                <TabsTrigger
                  value="accessories"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  Accessories
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(product => 
                      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="supplements" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(product => 
                      product.category === "supplements" && 
                      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="equipment" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(product => 
                      product.category === "equipment" && 
                      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="accessories" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(product => 
                      product.category === "accessories" && 
                      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
