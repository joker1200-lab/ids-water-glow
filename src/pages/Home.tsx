import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Shield, Wrench, Award, Users, CheckCircle, Settings, TestTube, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";
import ChatPopup from "@/components/ChatPopup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

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
import waterPurificationSystem from "@/assets/water-purification-system.jpg";
import spareParts from "@/assets/spare-parts.jpg";
import waterSoftener from "@/assets/water-softener.jpg";
import waterFilterSystem from "@/assets/water-filter-system.jpg";
import industrialPumps from "@/assets/industrial-pumps.jpg";
import waterTreatmentChemicals from "@/assets/water-treatment-chemicals.jpg";
import laboratoryTesting from "@/assets/laboratory-testing.jpg";

const Home = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Purification Systems",
      description: "Advanced water purification systems for clean, safe drinking water",
      image: waterPurificationSystem
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
      image: waterSoftener
    },
    {
      icon: TestTube,
      title: "Different Type of Filters",
      description: "Wide range of filtration solutions for various water treatment needs",
      image: waterFilterSystem
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
    "ISO Certified Quality Standards", 
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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              
              {/* Left Content - Takes 7 columns */}
              <div className="lg:col-span-7 text-primary-foreground py-12 lg:py-20">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4 lg:mb-6 slide-in-up">
                    <Droplets className="h-3 w-3 lg:h-4 lg:w-4 mr-2 text-accent" />
                    <span className="text-xs lg:text-sm font-medium text-accent">Leading Water Treatment in Tanzania</span>
                  </div>
                  
                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight slide-in-up delay-100">
                    Pure Water
                    <span className="block text-accent">Solutions for</span>
                    <span className="block">East Africa</span>
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-primary-foreground/90 leading-relaxed slide-in-up delay-200">
                    Advanced water treatment technology meeting international standards for industrial, commercial, and residential applications.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 slide-in-up delay-300">
                    <Link to="/contact">
                      <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                        Our Services
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12 slide-in-up delay-400">
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">500+</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Projects</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">10+</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Years</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">99.9%</div>
                      <div className="text-xs lg:text-sm text-primary-foreground/70">Purity</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Image - Takes 5 columns */}
              <div className="lg:col-span-5 relative slide-in-right delay-500">
                {/* Image Container with Modern Styling */}
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-3xl backdrop-blur-sm"></div>
                  
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={ownerEquipment}
                      alt="Professional water treatment equipment"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating Card */}
                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl slide-in-up delay-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary text-sm">ISO Certified</div>
                        <div className="text-xs text-muted-foreground">Quality Guaranteed</div>
                      </div>
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

      {/* FROTEC Partnership Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="slide-in-left">
              <div className="inline-flex items-center px-3 lg:px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 lg:mb-6">
                <Droplets className="h-3 w-3 lg:h-4 lg:w-4 mr-2 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-primary">Strategic Partnership</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Powered by <span className="text-primary">FROTEC</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8">
                We partner with FROTEC, a leading water treatment manufacturer from Guangzhou, China, to bring you innovative water filtration solutions that solve water challenges worldwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                {["27+ Product Categories", "Global Quality Standards", "Competitive Pricing", "Technical Excellence"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 lg:space-x-3">
                    <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-success flex-shrink-0" />
                    <span className="text-sm lg:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link to="/frotec">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                    Learn About FROTEC
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={equipment1}
                  alt="FROTEC water treatment equipment and technology"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">FROTEC Partner</div>
                    <div className="text-xs text-muted-foreground">Premium Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Our Product <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Comprehensive water treatment solutions across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Solenoid Valves", count: "8+ Products", icon: Settings, image: equipment1 },
              { name: "Dosing Pumps", count: "16+ Products", icon: Droplets, image: equipment2 },
              { name: "Filter Cartridges", count: "12+ Products", icon: TestTube, image: equipment3 },
              { name: "RO Membranes", count: "11+ Products", icon: Factory, image: ownerEquipment },
              { name: "Filter Systems", count: "12+ Products", icon: Wrench, image: hotelWaterSystem },
              { name: "Specialty Cartridges", count: "6+ Products", icon: Shield, image: municipalityWaterPlant },
              { name: "Membrane Vessels", count: "3+ Products", icon: Award, image: hospitalWaterSystem },
              { name: "Filter Housing", count: "3+ Products", icon: Users, image: industrialWaterPlant }
            ].map((category, index) => (
              <Card key={index} className={`group bg-card shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-2 slide-in-up delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-primary rounded-full p-2">
                    <category.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{category.count}</p>
                  <Link to="/products">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      View Products
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
                View All Products
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
              Call +255 123 456 789
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