import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Shield, Wrench, Award, Users, CheckCircle, Settings, TestTube, Factory, Package, Calendar, Clock, User, Filter, Zap, Cylinder } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";
import ChatPopup from "@/components/ChatPopup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import images
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import ownerEquipment from "@/assets/owner-equipment.jpg";
import hotelWaterSystem from "@/assets/hotel-water-system.jpg";
import municipalityWaterPlant from "@/assets/municipality-water-plant.jpg";
import hospitalWaterSystem from "@/assets/hospital-water-system.jpg";
import industrialWaterPlant from "@/assets/industrial-water-plant.jpg";
import residentialWaterSystem from "@/assets/residential-water-system.jpg";
import waterVendorFacility from "@/assets/water-vendor-facility.jpg";

// Import service images
import waterTreatmentPlant from "@/assets/water-treatment-plant.jpg";
import spareParts from "@/assets/spare-parts.jpg";
import waterSoftenerSystem from "@/assets/water-softener-system.jpg";
import industrialFiltration from "@/assets/industrial-filtration.jpg";
import industrialPumps from "@/assets/industrial-pumps.jpg";
import waterTreatmentChemicals from "@/assets/water-treatment-chemicals.jpg";
import laboratoryTesting from "@/assets/laboratory-testing.jpg";

// Import FROTEC catalog images
import catalogRoMembrane from "@/assets/catalog-ro-membrane.jpg";
import catalogFrpTank from "@/assets/catalog-frp-tank.jpg";
import catalogHousingFilter from "@/assets/catalog-housing-filter.jpg";
import catalogUvSterilizer from "@/assets/catalog-uv-sterilizer.jpg";
import catalogSelfCleaningFilter from "@/assets/catalog-self-cleaning-filter.jpg";
import catalogDosingPump from "@/assets/catalog-dosing-pump.jpg";
import catalogDosingSystem from "@/assets/catalog-dosing-system.jpg";
import catalogControlHead from "@/assets/catalog-control-head.jpg";
import catalogTestDevices from "@/assets/catalog-test-devices.jpg";
import catalogRoSystem from "@/assets/catalog-ro-system.jpg";
import industrialPumpsCollection from "@/assets/industrial-pumps-collection.jpg";
import verticalPumpsSeries from "@/assets/vertical-pumps-series.jpg";

const Home = () => {
  // FROTEC Featured Products for Carousel
  const featuredProducts = [
    {
      name: "Industrial Pumps Collection",
      category: "Pumping Solutions",
      image: industrialPumpsCollection,
      description: "Comprehensive range of industrial pumps for water treatment"
    },
    {
      name: "Vertical Multistage Pumps",
      category: "High Pressure Pumps",
      image: verticalPumpsSeries,
      description: "High-efficiency vertical pumps for various applications"
    },
    {
      name: "RO Membrane",
      category: "Reverse Osmosis",
      image: catalogRoMembrane,
      description: "High-efficiency RO membranes for water purification"
    },
    {
      name: "FRP Tank",
      category: "Storage Solutions",
      image: catalogFrpTank,
      description: "Durable fiber-reinforced plastic water tanks"
    },
    {
      name: "Housing Filter",
      category: "Filtration",
      image: catalogHousingFilter,
      description: "Industrial-grade filter housing systems"
    },
    {
      name: "UV Sterilizer",
      category: "Disinfection",
      image: catalogUvSterilizer,
      description: "UV sterilization systems for water treatment"
    },
    {
      name: "Self-Cleaning Filter",
      category: "Advanced Filtration",
      image: catalogSelfCleaningFilter,
      description: "Automatic self-cleaning filter systems"
    },
    {
      name: "Dosing Pump",
      category: "Chemical Dosing",
      image: catalogDosingPump,
      description: "Precision chemical dosing pumps"
    },
    {
      name: "Dosing System",
      category: "Automation",
      image: catalogDosingSystem,
      description: "Complete dosing system solutions"
    },
    {
      name: "Control Head",
      category: "Control Systems",
      image: catalogControlHead,
      description: "Advanced control heads for automation"
    },
    {
      name: "Test Devices",
      category: "Quality Control",
      image: catalogTestDevices,
      description: "Water quality testing equipment"
    },
    {
      name: "RO System",
      category: "Complete Systems",
      image: catalogRoSystem,
      description: "Home-use reverse osmosis purifiers"
    }
  ];

  // FROTEC Complete Product Catalog (27 Categories)
  const frotecProducts = [
    {
      id: 1,
      name: "RO Membrane",
      icon: Droplets,
      image: catalogRoMembrane,
      description: "High-performance reverse osmosis membranes for superior water purification"
    },
    {
      id: 2,
      name: "UF Modules and MBR",
      icon: Filter,
      image: equipment1,
      description: "Ultrafiltration modules and membrane bioreactor systems"
    },
    {
      id: 3,
      name: "CEDI Modules",
      icon: Factory,
      image: equipment2,
      description: "Continuous electrodeionization modules for ultra-pure water"
    },
    {
      id: 4,
      name: "FRP Tank",
      icon: Package,
      image: catalogFrpTank,
      description: "Fiber-reinforced plastic tanks for water storage"
    },
    {
      id: 5,
      name: "Housing Filter",
      icon: Shield,
      image: catalogHousingFilter,
      description: "Industrial filter housing for various applications"
    },
    {
      id: 5,
      name: "Strainer",
      icon: Filter,
      image: industrialFiltration,
      description: "Y-type and basket strainers for water filtration"
    },
    {
      id: 6,
      name: "UV Sterilizer",
      icon: Zap,
      image: catalogUvSterilizer,
      description: "Ultraviolet water sterilization systems"
    },
    {
      id: 7,
      name: "Ozone Generator",
      icon: Factory,
      image: equipment1,
      description: "Ozone generation systems for water treatment"
    },
    {
      id: 8,
      name: "Self-Cleaning Filter",
      icon: Settings,
      image: catalogSelfCleaningFilter,
      description: "Automatic self-cleaning filtration systems"
    },
    {
      id: 9,
      name: "Dosing Pump",
      icon: Droplets,
      image: catalogDosingPump,
      description: "Precision chemical dosing pumps"
    },
    {
      id: 10,
      name: "Dosing System",
      icon: Factory,
      image: catalogDosingSystem,
      description: "Complete automated dosing solutions"
    },
    {
      id: 12,
      name: "Filter Housing",
      icon: Shield,
      image: catalogHousingFilter,
      description: "Stainless steel and FRP filter housings"
    },
    {
      id: 13,
      name: "Plastic Filter Housing",
      icon: Shield,
      image: industrialFiltration,
      description: "Durable plastic filter housing units"
    },
    {
      id: 14,
      name: "Mixer",
      icon: Settings,
      image: industrialPumps,
      description: "Static and dynamic mixing systems"
    },
    {
      id: 16,
      name: "Control Head",
      icon: Settings,
      image: catalogControlHead,
      description: "Automatic control valves and heads"
    },
    {
      id: 17,
      name: "Test Devices",
      icon: TestTube,
      image: catalogTestDevices,
      description: "TDS meters, conductivity monitors, and testing kits"
    },
    {
      id: 18,
      name: "Home-Use Purifier",
      icon: Droplets,
      image: catalogRoSystem,
      description: "Residential reverse osmosis water purification systems"
    },
    {
      id: 19,
      name: "Pump",
      icon: Wrench,
      image: industrialPumps,
      description: "High-pressure pumps for water treatment"
    },
    {
      id: 20,
      name: "Accessories",
      icon: Package,
      image: spareParts,
      description: "Fittings, connectors, and spare parts"
    },
    {
      id: 21,
      name: "Ion Exchange Resin",
      icon: Factory,
      image: waterTreatmentChemicals,
      description: "Cation and anion exchange resins"
    },
    {
      id: 22,
      name: "Valve",
      icon: Settings,
      image: equipment3,
      description: "Solenoid valves, ball valves, and check valves"
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: "Water Purification Systems",
      description: "Advanced water purification systems for clean, safe drinking water",
      image: waterTreatmentPlant
    },
    {
      icon: Settings,
      title: "Water Purification Plants Spareparts",
      description: "Genuine spare parts and components for all water treatment equipment",
      image: spareParts
    },
    {
      icon: Droplets,
      title: "Water Softener Units",
      description: "High-quality water softening systems for hard water treatment",
      image: waterSoftenerSystem
    },
    {
      icon: TestTube,
      title: "Different Type of Filters",
      description: "Wide range of filtration solutions for various water treatment needs",
      image: industrialFiltration
    },
    {
      icon: Settings,
      title: "Food Grade Industrial Pumps",
      description: "Specialized pumps designed for food processing and industrial applications",
      image: industrialPumps
    },
    {
      icon: Factory,
      title: "Water Treatment Chemicals",
      description: "High-quality chemicals for water treatment and purification processes",
      image: waterTreatmentChemicals
    },
    {
      icon: Wrench,
      title: "Water Hardness Test Kits",
      description: "Professional testing equipment for water quality analysis and monitoring",
      image: laboratoryTesting
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: CheckCircle, number: "1000+", label: "Projects Completed" },
    { icon: Droplets, number: "99.9%", label: "Purity Rate" }
  ];

  const features = [
    "Advanced Reverse Osmosis Technology",
    "Certified Quality Standards", 
    "24/7 Technical Support",
    "Custom Solution Design",
    "Eco-Friendly Processes",
    "Professional Installation"
  ];

  const faqItems = [
    {
      question: "What types of water treatment systems do you offer?",
      answer: "We offer comprehensive water treatment solutions including reverse osmosis systems, industrial filtration units, UV sterilization systems, water softeners, and custom-designed solutions for specific industrial applications."
    },
    {
      question: "How long does installation typically take?",
      answer: "Installation time varies by system complexity. Small residential systems take 4-8 hours, commercial systems require 1-3 days, while large industrial systems may take 3-14 days depending on complexity and site preparation."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer comprehensive maintenance packages including scheduled preventive maintenance, emergency repairs, filter replacements, system optimization, and 24/7 technical support with performance guarantees."
    },
    {
      question: "What areas do you serve in Tanzania?",
      answer: "We serve all regions of Tanzania including Dar es Salaam, Arusha, Mwanza, Dodoma, and other major cities. We also provide services across East Africa including Kenya, Uganda, and Rwanda."
    }
  ];

  const featuredBlogPosts = [
    {
      title: "The Future of Water Treatment in Tanzania",
      excerpt: "Explore innovative technologies and sustainable practices shaping water treatment across East Africa, from smart monitoring to energy-efficient purification methods.",
      image: ownerEquipment,
      date: "March 15, 2024",
      readTime: "12 min read",
      category: "Industry Insights",
      author: "Dr. James Mwenda"
    },
    {
      title: "Industrial Water Treatment Best Practices",
      excerpt: "A comprehensive guide to implementing world-class water treatment standards in manufacturing facilities across Tanzania with cost optimization strategies.",
      image: equipment1,
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Technical Guide",
      author: "Eng. Sarah Moshi"
    },
    {
      title: "Reverse Osmosis Technology Guide",
      excerpt: "Understanding RO systems in Tanzania's unique water conditions. Technical guide covering membrane selection, pre-treatment, and maintenance schedules.",
      image: equipment2,
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "Technology",
      author: "Dr. Michael Temba"
    }
  ];

  const portfolioProjects = [
    {
      title: "BSs Insulators Ltd Treatment Plant",
      category: "Manufacturing Industry",
      description: "Specialized water treatment solution for BSs Insulators Ltd, ensuring pure water supply for insulator manufacturing and cooling systems.",
      image: municipalityWaterPlant,
      capacity: "12,000L/hr",
      systems: ["Multi-stage Filtration", "Ion Exchange", "Water Recycling"]
    },
    {
      title: "Benedictine Fathers Water System",
      category: "Religious Institution",
      description: "Community water treatment system for Benedictine Fathers facility, providing clean water for residential and community activities.",
      image: residentialWaterSystem,
      capacity: "3,500L/hr",
      systems: ["Reverse Osmosis", "UV Sterilization", "Storage System"]
    },
    {
      title: "Naira Cosmetics Production Water",
      category: "Cosmetics Manufacturing",
      description: "High-purity water treatment system for Naira Cosmetics production processes, meeting strict quality standards for cosmetic manufacturing.",
      image: industrialWaterPlant,
      capacity: "8,000L/hr",
      systems: ["Deionization", "Multi-stage RO", "Quality Control"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Product Carousel */}
      <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl opacity-5"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              
              {/* Left Content - Takes 6 columns */}
              <div className="lg:col-span-6 text-primary-foreground">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4 lg:mb-6 slide-in-up">
                    <Package className="h-3 w-3 lg:h-4 lg:w-4 mr-2 text-accent" />
                    <span className="text-xs lg:text-sm font-medium text-accent">FROTEC Authorized Distributor</span>
                  </div>
                  
                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight slide-in-up delay-100">
                    Premium Water
                    <span className="block text-accent">Treatment Products</span>
                    <span className="block">From FROTEC</span>
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg sm:text-xl lg:text-xl mb-6 lg:mb-8 text-primary-foreground/90 leading-relaxed slide-in-up delay-200">
                    Shop from our extensive catalog of 25+ product categories. Professional water treatment solutions meeting international quality standards.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 slide-in-up delay-300">
                    <Link to="/products">
                      <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg text-base lg:text-lg px-6 lg:px-8">
                        Browse Products
                        <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent text-base lg:text-lg px-6 lg:px-8">
                        Request Quote
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12 slide-in-up delay-400">
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">25+</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Categories</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">500+</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Products</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">Global</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Standards</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Carousel - Takes 6 columns */}
              <div className="lg:col-span-6 relative slide-in-right delay-500">
                <Carousel 
                  className="w-full mx-auto"
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {featuredProducts.map((product, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          {/* Product Card */}
                          <div className="relative overflow-hidden rounded-2xl bg-card">
                            <div className="relative h-[500px] lg:h-[600px]">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                              
                              {/* Product Info Overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <Badge className="bg-accent text-accent-foreground mb-3">
                                  {product.category}
                                </Badge>
                                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                                <p className="text-white/90 text-sm mb-4">{product.description}</p>
                                <Link to="/products">
                                  <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                                    View Details
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
                  <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
                </Carousel>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl slide-in-up delay-700 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">International Quality</div>
                      <div className="text-xs text-muted-foreground">FROTEC Certified</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center slide-in-up delay-${index * 100}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-lg">
          <stat.icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FROTEC Complete Product Catalog */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Package className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">FROTEC Product Catalog</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Shop Our Complete <span className="text-primary">Product Range</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Explore 25+ categories of professional water treatment products from FROTEC - your trusted partner in water solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frotecProducts.map((product, index) => (
              <Card key={product.id} className={`group bg-card shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer slide-in-up delay-${(index + 1) * 50}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 bg-primary rounded-full p-2.5 shadow-lg">
                    <product.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    Available
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      Request Quote
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                View Detailed Product Specifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Comprehensive water treatment solutions tailored for Tanzania's industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`group bg-card shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 slide-in-up delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-primary rounded-full p-2">
                    <service.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{service.description}</p>
                  <Link to="/services">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">IDS Water Tech?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine cutting-edge technology with local expertise to deliver water treatment solutions that meet international standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={equipment1}
                  alt="Water treatment system"
                  className="rounded-lg shadow-medium hover:shadow-strong transition-shadow float-animation"
                />
                <img
                  src={equipment2}
                  alt="Industrial filtration"
                  className="rounded-lg shadow-medium hover:shadow-strong transition-shadow float-animation delay-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Transforming water quality for leading companies across Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className={`group bg-card shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 slide-in-up delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold text-primary">{project.capacity}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.systems.map((system, sysIndex) => (
                        <Badge key={sysIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Get answers to common questions about our water treatment solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`bg-card rounded-lg shadow-medium hover:shadow-strong transition-shadow slide-in-up delay-${index * 100}`}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Link to="/faq">
                <Button size="lg" variant="outline" className="group">
                  View All FAQs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Stay updated with the latest trends and technologies in water treatment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredBlogPosts.map((post, index) => (
              <Card key={index} className={`group bg-gradient-card shadow-medium hover:shadow-joy transition-all duration-normal hover:-translate-y-2 hover-rainbow slide-in-up delay-${(index + 1) * 200}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary backdrop-blur-sm text-white border-0 pulse-glow">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-energy hover:bg-gradient-joy shadow-joy hover-rainbow">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Ready for Clean Water Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto slide-in-up delay-200">
            Contact us today for a free consultation and discover how we can improve your water quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up delay-300">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-energy hover:bg-gradient-joy text-white shadow-joy hover-rainbow">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-gradient-accent hover:text-white hover:border-transparent">
              Call +255 755 652588
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Popup */}
      <ChatPopup />
    </div>
  );
};

export default Home;