import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Package, Wrench, ShoppingCart, Eye, CheckCircle, Droplets } from "lucide-react";
import LazyImage from "@/components/LazyImage";

// Import product images
import filterHousing1 from "@/assets/filter-housing-1.jpg";
import filterHousing2 from "@/assets/filter-housing-2.jpg";
import filterHousing3 from "@/assets/filter-housing-3.jpg";
import membraneVessel1 from "@/assets/membrane-vessel-1.jpg";
import membraneVessel2 from "@/assets/membrane-vessel-2.jpg";
import membraneVessel3 from "@/assets/membrane-vessel-3.jpg";
import roMembrane1 from "@/assets/ro-membrane-1.jpg";
import roMembrane2 from "@/assets/ro-membrane-2.jpg";
import roMembrane3 from "@/assets/ro-membrane-3.jpg";
import roMembrane4 from "@/assets/ro-membrane-4.jpg";
import roMembrane5 from "@/assets/ro-membrane-5.jpg";
import roMembrane6 from "@/assets/ro-membrane-6.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    {
      id: "filter-housings",
      name: "Filter Housings",
      icon: Filter,
      description: "High-quality filter housings for various water treatment applications",
      products: [
        {
          id: "fh-404",
          name: "404 Filter Housing",
          price: "$45.00",
          image: filterHousing1,
          description: "Durable 404 series filter housing with pressure relief valve",
          features: ["Pressure relief valve", "Easy maintenance", "Corrosion resistant", "Multiple inlet/outlet options"],
          specifications: ["Material: Food grade plastic", "Max Pressure: 150 PSI", "Temperature: 40-100°F", "Thread: 1/4\" NPT"]
        },
        {
          id: "fh-4040",
          name: "4040 Filter Housing",
          price: "$52.00",
          image: filterHousing2,
          description: "Heavy-duty 4040 series filter housing for industrial applications",
          features: ["Heavy-duty construction", "High flow rate", "Easy cartridge replacement", "Leak-proof design"],
          specifications: ["Material: High-grade polymer", "Max Pressure: 200 PSI", "Temperature: 35-105°F", "Thread: 3/8\" NPT"]
        },
        {
          id: "fh-standard",
          name: "Standard Filter Housing",
          price: "$38.00",
          image: filterHousing3,
          description: "Standard filter housing suitable for residential and light commercial use",
          features: ["Cost-effective", "Easy installation", "Standard fittings", "Reliable performance"],
          specifications: ["Material: ABS plastic", "Max Pressure: 125 PSI", "Temperature: 40-95°F", "Thread: 1/4\" NPT"]
        }
      ]
    },
    {
      id: "membrane-vessels",
      name: "RO Membrane Vessels",
      icon: Package,
      description: "Professional-grade reverse osmosis membrane vessels and components",
      products: [
        {
          id: "mv-erotec-4040",
          name: "EROTEC 4040 Membrane Vessel",
          price: "$125.00",
          image: membraneVessel1,
          description: "Professional EROTEC 4040 membrane vessel with complete component kit",
          features: ["Complete component kit", "High-quality seals", "Easy assembly", "Professional grade"],
          specifications: ["Length: 40 inches", "Diameter: 4 inches", "Max Pressure: 300 PSI", "Material: FRP composite"]
        },
        {
          id: "mv-erotec-standard",
          name: "EROTEC Standard Vessel",
          price: "$98.00",
          image: membraneVessel2,
          description: "Standard EROTEC membrane vessel with essential components",
          features: ["Essential components included", "Durable construction", "Standard fittings", "Proven reliability"],
          specifications: ["Length: 32 inches", "Diameter: 4 inches", "Max Pressure: 250 PSI", "Material: FRP composite"]
        },
        {
          id: "mv-complete-kit",
          name: "Complete Membrane Kit",
          price: "$155.00",
          image: membraneVessel3,
          description: "Complete membrane vessel kit with all accessories and components",
          features: ["All accessories included", "Installation hardware", "O-rings and seals", "Comprehensive kit"],
          specifications: ["Vessel + Components", "Multiple O-ring sizes", "Installation guide", "1-year warranty"]
        }
      ]
    },
    {
      id: "ro-membranes",
      name: "RO Membranes",
      icon: Droplets,
      description: "High-performance EROTEC reverse osmosis membranes for superior water purification",
      products: [
        {
          id: "ro-erotec-4040",
          name: "EROTEC 4040 RO Membrane",
          price: "$185.00",
          image: roMembrane1,
          description: "Premium EROTEC 4040 reverse osmosis membrane with excellent salt rejection",
          features: ["99.5% salt rejection", "High flow rate", "Low pressure drop", "Extended lifespan"],
          specifications: ["Size: 40\" x 4\"", "Max Pressure: 600 PSI", "Max Temperature: 113°F", "pH Range: 2-11"]
        },
        {
          id: "ro-erotec-bundle",
          name: "EROTEC Membrane Bundle",
          price: "$750.00",
          image: roMembrane2,
          description: "Complete bundle of EROTEC RO membranes for industrial applications",
          features: ["Bulk packaging", "Consistent quality", "Cost-effective", "Industrial grade"],
          specifications: ["Multiple sizes available", "Factory sealed", "2-year shelf life", "NSF certified"]
        },
        {
          id: "ro-erotec-cross-section",
          name: "EROTEC Spiral Wound Membrane",
          price: "$165.00",
          image: roMembrane3,
          description: "Advanced spiral wound design for maximum surface area and efficiency",
          features: ["Spiral wound technology", "Maximum surface area", "Superior performance", "Easy installation"],
          specifications: ["Spiral wound design", "Polyamide thin film", "High permeate flow", "Low energy consumption"]
        },
        {
          id: "ro-erotec-multi-pack",
          name: "EROTEC Multi-Pack Set",
          price: "$425.00",
          image: roMembrane4,
          description: "Professional multi-pack set for commercial water treatment systems",
          features: ["Multiple membranes", "Professional grade", "Optimized spacing", "Complete system"],
          specifications: ["4-membrane configuration", "Uniform flow distribution", "Commercial grade", "Installation guide"]
        },
        {
          id: "ro-erotec-boxed",
          name: "EROTEC Boxed Membrane",
          price: "$195.00",
          image: roMembrane5,
          description: "Factory-sealed EROTEC membrane with original packaging and documentation",
          features: ["Factory sealed", "Original packaging", "Quality certificate", "Warranty included"],
          specifications: ["Original EROTEC box", "Documentation included", "Serial numbered", "Quality guaranteed"]
        },
        {
          id: "ro-erotec-standard",
          name: "EROTEC Standard Membrane",
          price: "$155.00",
          image: roMembrane6,
          description: "Standard EROTEC RO membrane for residential and light commercial use",
          features: ["Standard configuration", "Reliable performance", "Cost effective", "Easy replacement"],
          specifications: ["Standard dimensions", "Residential/light commercial", "Easy installation", "1-year warranty"]
        }
      ]
    },
    {
      id: "accessories",
      name: "Components & Accessories",
      icon: Wrench,
      description: "Essential components and accessories for water treatment systems",
      products: [
        {
          id: "acc-orings",
          name: "O-Ring Set",
          price: "$12.00",
          image: membraneVessel1,
          description: "Complete set of O-rings for membrane vessels and filter housings",
          features: ["Multiple sizes", "Food grade material", "High durability", "Universal compatibility"],
          specifications: ["Material: EPDM rubber", "Temperature range: -40°F to 250°F", "Set of 20 pieces", "Various sizes"]
        },
        {
          id: "acc-endcaps",
          name: "End Cap Assembly",
          price: "$28.00",
          image: membraneVessel2,
          description: "Precision-engineered end cap assembly for membrane vessels",
          features: ["Precision fit", "Leak-proof design", "Easy installation", "Long-lasting"],
          specifications: ["Material: Stainless steel", "Thread: Standard NPT", "Pressure rated", "Corrosion resistant"]
        },
        {
          id: "acc-brackets",
          name: "Mounting Brackets",
          price: "$18.00",
          image: membraneVessel3,
          description: "Heavy-duty mounting brackets for secure vessel installation",
          features: ["Heavy-duty construction", "Secure mounting", "Adjustable design", "Corrosion resistant"],
          specifications: ["Material: Galvanized steel", "Adjustable width", "Wall/floor mount", "Hardware included"]
        }
      ]
    }
  ];

  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({ ...product, category: category.id, categoryName: category.name }))
  );

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Professional-grade water treatment components and systems designed for reliability, 
            performance, and long-lasting operation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              ISO Certified
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Quality Guaranteed
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Fast Shipping
            </Badge>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="all" className="text-sm">All Products</TabsTrigger>
              <TabsTrigger value="filter-housings" className="text-sm">Filter Housings</TabsTrigger>
              <TabsTrigger value="membrane-vessels" className="text-sm">RO Vessels</TabsTrigger>
              <TabsTrigger value="ro-membranes" className="text-sm">RO Membranes</TabsTrigger>
              <TabsTrigger value="accessories" className="text-sm">Accessories</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {productCategories.map((category) => (
                <div key={category.id} className="space-y-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product) => (
                      <ProductCard key={product.id} product={{ ...product, categoryName: category.name }} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={{ ...product, categoryName: category.name }} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Our team can provide custom 
            water treatment solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    features: string[];
    specifications: string[];
    categoryName: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="group hover:shadow-elegant transition-all duration-normal overflow-hidden">
      <div className="relative overflow-hidden">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-normal"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {product.categoryName}
        </Badge>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <span className="text-2xl font-bold text-primary">{product.price}</span>
        </div>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {showDetails && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Specifications:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                {product.specifications.map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            {showDetails ? "Hide Details" : "View Details"}
          </Button>
          <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-primary-dark">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;