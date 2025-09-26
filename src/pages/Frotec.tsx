import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, CheckCircle, Globe, Award, Users, Target, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Import images
import ownerEquipment from "@/assets/owner-equipment.jpg";
import waterPurificationSystem from "@/assets/water-purification-system.jpg";
import industrialWaterPlant from "@/assets/industrial-water-plant.jpg";
import municipalityWaterPlant from "@/assets/municipality-water-plant.jpg";

const Frotec = () => {
  const productCategories = [
    { id: "01", name: "RO MEMBRANE", description: "High-performance reverse osmosis membranes" },
    { id: "02", name: "UF MODULES AND MBR", description: "Ultrafiltration modules and membrane bioreactor systems" },
    { id: "03", name: "CEDI MODULES", description: "Continuous electrodeionization modules" },
    { id: "04", name: "FRP TANK", description: "Fiberglass reinforced plastic tanks" },
    { id: "05", name: "MEMBRANE VESSEL", description: "Pressure vessels for membrane systems" },
    { id: "06", name: "WATER SYSTEM", description: "Complete water treatment systems" },
    { id: "07", name: "HOUSING FILTER", description: "Filter housing systems" },
    { id: "08", name: "STRAINER", description: "Water strainer systems" },
    { id: "09", name: "UV STERILIZER", description: "Ultraviolet sterilization systems" },
    { id: "10", name: "OZONE GENERATOR", description: "Ozone generation equipment" },
    { id: "11", name: "SELF CLEANING FILTER", description: "Automatic self-cleaning filtration systems" },
    { id: "12", name: "DOSING PUMP", description: "Chemical dosing pump systems" },
    { id: "13", name: "DOSING SYSTEM", description: "Complete chemical dosing systems" },
    { id: "14", name: "BRINE TANK", description: "Brine storage and management tanks" },
    { id: "15", name: "FILTER HOUSING", description: "Industrial filter housing units" },
    { id: "16", name: "PLASTIC FILTER HOUSING", description: "Plastic filter housing systems" },
    { id: "17", name: "MIXER", description: "Industrial mixing equipment" },
    { id: "18", name: "CARTRIDGE FILTER", description: "Replaceable cartridge filter systems" },
    { id: "19", name: "CARTRIDGE FILTER", description: "Advanced cartridge filtration solutions" },
    { id: "20", name: "CONTROL HEAD", description: "System control and monitoring heads" },
    { id: "21", name: "TEST DEVICES", description: "Water quality testing equipment" },
    { id: "22", name: "TEST DEVICES", description: "Advanced testing and monitoring devices" },
    { id: "23", name: "HOMEUSE PURIFIER", description: "Residential water purification systems" },
    { id: "24", name: "PUMP", description: "Industrial water pumps" },
    { id: "25", name: "ACCESSORIES", description: "Water treatment system accessories" },
    { id: "26", name: "ION EXCHANGE RESIN", description: "Ion exchange resin systems" },
    { id: "27", name: "VALVE", description: "Industrial valves and controls" }
  ];

  const advantages = [
    {
      icon: Award,
      title: "The Best",
      description: "Top-quality water treatment solutions with proven results"
    },
    {
      icon: CheckCircle,
      title: "Fast, Reliable",
      description: "Quick delivery and dependable service worldwide"
    },
    {
      icon: Target,
      title: "Competitive Rates",
      description: "Cost-effective solutions without compromising quality"
    },
    {
      icon: Factory,
      title: "High Quality Products",
      description: "Premium manufacturing standards and materials"
    },
    {
      icon: Users,
      title: "Superior Technical Support",
      description: "Expert technical assistance and customer service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>FROTEC - Water Treatment Solutions | Premium Industrial Equipment</title>
      <meta name="description" content="FROTEC offers innovative water treatment solutions including RO membranes, filtration systems, and industrial equipment. Premium quality water treatment technology from Guangzhou." />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
                <Droplets className="h-4 w-4 mr-2 text-accent" />
                <span className="text-sm font-medium text-accent">Guangzhou FROTEC Water Treatment</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                FROTEC
                <span className="block text-accent">Water Treatment</span>
                <span className="block">Solutions</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-primary-foreground/90 leading-relaxed">
                Innovative water filtration solutions that solve water challenges worldwide with premium quality products and superior technical support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={ownerEquipment}
                  alt="FROTEC water treatment equipment and solutions"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">FROTEC</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                At FROTEC, we strive to develop innovative water filtration solutions that can solve the water challenges. We provide top ranking water treatment products and solutions ranging from basic water filters, softeners, reverse osmosis equipment and waste water solutions to customized and sophisticated water treatment plants.
              </p>
              <p className="text-lg text-muted-foreground">
                With extensive experience in the water treatment industry and an experienced team, we bring high quality water treatment products and solutions as well as service to partners worldwide. We support our partners with high quality products, competitive rates, technical support and service by delivering worldwide all water treatment components, spare parts and technically advanced systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">Delivering water treatment solutions worldwide with comprehensive support.</p>
            </Card>
            
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Factory className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Manufacturing Excellence</h3>
              <p className="text-muted-foreground">State-of-the-art manufacturing facility in Guangzhou, China.</p>
            </Card>
            
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Environmental Mission</h3>
              <p className="text-muted-foreground">Working together with partners to protect our environment.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose FROTEC Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">FROTEC?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five key advantages that set FROTEC apart in the water treatment industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full mb-3 lg:mb-4">
                  <advantage.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary-foreground" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">{advantage.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Product <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of water treatment products and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start gap-3 lg:gap-4">
                  <Badge variant="secondary" className="text-primary font-bold text-xs lg:text-sm">
                    {category.id}
                  </Badge>
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-semibold mb-1 lg:mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-accent">GUANGZHOU FROTEC</span>
                <br />WATER TREATMENT CO LTD
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Address:</strong> 101 Building, Changsha Road No.32, Dalong Street, Panyu District, Guangzhou
                </p>
                <p>
                  <strong>Website:</strong> <a href="https://www.frotecfilter.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.frotecfilter.com</a>
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                    Contact FROTEC
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={industrialWaterPlant}
                alt="FROTEC industrial water treatment plant"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frotec;