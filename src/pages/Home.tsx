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
      title: "Luxury Hotel Water Treatment System",
      category: "Hospitality Industry",
      description: "Complete water treatment system for luxury hospitality facility with 200+ rooms including reverse osmosis, UV sterilization, and water softening systems.",
      image: hotelWaterSystem,
      capacity: "5,000L/hr",
      systems: ["Reverse Osmosis", "UV Sterilization", "Water Softening"]
    },
    {
      title: "TDL Company Industrial System",
      category: "Manufacturing Industry", 
      description: "Advanced industrial water treatment system for TDL Company, providing high-quality water for manufacturing processes and employee facilities.",
      image: industrialWaterPlant,
      capacity: "15,000L/hr",
      systems: ["Industrial RO", "Pre-treatment", "Quality Monitoring"]
    },
    {
      title: "BSs Insulators Ltd Treatment Plant",
      category: "Manufacturing Industry",
      description: "Specialized water treatment solution for BSs Insulators Ltd, ensuring pure water supply for insulator manufacturing and cooling systems.",
      image: municipalityWaterPlant,
      capacity: "12,000L/hr",
      systems: ["Multi-stage Filtration", "Ion Exchange", "Water Recycling"]
    },
    {
      title: "Regional Hospital Water System",
      category: "Healthcare",
      description: "Medical-grade water treatment system ensuring sterile water supply for surgical procedures and patient care in regional hospital.",
      image: hospitalWaterSystem,
      capacity: "8,000L/hr",
      systems: ["Medical Grade RO", "Deionization", "Storage & Distribution"]
    },
    {
      title: "Manufacturing Plant Water Treatment",
      category: "Manufacturing Industry",
      description: "High-capacity industrial water treatment for manufacturing facility with strict quality standards and continuous operation requirements.",
      image: industrialWaterPlant,
      capacity: "15,000L/hr",
      systems: ["Multi-stage RO", "Ozonation", "Quality Control"]
    },
    {
      title: "Residential Estate Community System",
      category: "Residential Complex",
      description: "Community water treatment system serving 500+ families with clean, safe drinking water in residential development.",
      image: residentialWaterSystem,
      capacity: "2,000L/hr",
      systems: ["Community RO", "UV Treatment", "Distribution Network"]
    },
    {
      title: "Commercial Water Vendor Facility",
      category: "Commercial Water Sales",
      description: "Centralized water treatment facility serving multiple water vendors and small businesses providing clean drinking water to the community.",
      image: waterVendorFacility,
      capacity: "10,000L/hr",
      systems: ["Advanced Filtration", "Quality Testing", "Bulk Distribution"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-primary-foreground">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 slide-in-left">
                  <span className="gradient-text">Clean Water</span>
                  <span className="block text-accent joy-bounce">For Tanzania</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 opacity-90 slide-in-left delay-200">
                  Leading water treatment solutions for industrial and commercial applications across East Africa
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 slide-in-left delay-300">
                  <Button size="lg" className="bg-gradient-energy hover:bg-gradient-joy text-white shadow-joy hover-rainbow text-sm sm:text-base">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-gradient-primary hover:text-white hover:border-transparent text-sm sm:text-base">
                    View Our Work
                  </Button>
                </div>
              </div>
              
              <div className="relative slide-in-right delay-400 mt-8 lg:mt-0">
                <div className="absolute -inset-2 lg:-inset-4 bg-gradient-joy rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-40 animate-pulse"></div>
                <img
                  src={ownerEquipment}
                  alt="Professional water treatment equipment"
                  className="relative rounded-2xl lg:rounded-3xl shadow-joy w-full h-auto object-cover pulse-glow"
                  loading="eager"
                />
              </div>
            </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-primary-foreground/30">
          <Droplets className="h-16 w-16 float-animation" />
        </div>
        <div className="absolute bottom-20 right-10 text-primary-foreground/20">
          <Droplets className="h-12 w-12 float-animation delay-500" />
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
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Transforming water quality across Tanzania - from luxury hotels to family homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className={`group bg-gradient-card shadow-medium hover:shadow-joy transition-all duration-normal hover:-translate-y-4 hover-rainbow slide-in-up delay-${(index + 1) * 100}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-energy text-white border-0 pulse-glow">
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
                    className="w-full mt-4 group-hover:bg-gradient-primary group-hover:text-white transition-all"
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
              <Button size="lg" className="bg-gradient-energy hover:bg-gradient-joy shadow-joy hover-rainbow">
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