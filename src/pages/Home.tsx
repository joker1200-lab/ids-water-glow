import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Shield, Wrench, Award, Users, CheckCircle } from "lucide-react";
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
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Home = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Purification",
      description: "Advanced filtration systems for crystal clear, safe drinking water",
      image: equipment1
    },
    {
      icon: Shield,
      title: "Industrial Treatment",
      description: "Heavy-duty water treatment for manufacturing and industrial processes",
      image: equipment2
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description: "Professional maintenance services to keep your systems running optimally",
      image: equipment3
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
      title: "Serena Hotel Dar es Salaam",
      category: "Hospitality",
      location: "Dar es Salaam",
      description: "Complete water treatment system for luxury hotel with 200+ rooms including reverse osmosis, UV sterilization, and water softening systems.",
      image: portfolio1,
      capacity: "5,000L/hr",
      systems: ["Reverse Osmosis", "UV Sterilization", "Water Softening"]
    },
    {
      title: "Dodoma Municipal Water Plant",
      category: "Municipal",
      location: "Dodoma",
      description: "Large-scale water treatment facility serving 50,000+ residents with advanced filtration and purification systems.",
      image: portfolio2,
      capacity: "50,000L/hr",
      systems: ["Multi-stage Filtration", "Chlorination", "Storage Systems"]
    },
    {
      title: "Muhimbili Hospital Complex",
      category: "Healthcare",
      location: "Dar es Salaam",
      description: "Medical-grade water treatment system ensuring sterile water supply for surgical procedures and patient care.",
      image: portfolio3,
      capacity: "8,000L/hr",
      systems: ["Medical Grade RO", "Deionization", "Storage & Distribution"]
    },
    {
      title: "Kilimanjaro Bottling Company",
      category: "Industrial",
      location: "Arusha",
      description: "High-capacity industrial water treatment for beverage production with strict quality standards.",
      image: portfolio4,
      capacity: "15,000L/hr",
      systems: ["Multi-stage RO", "Ozonation", "Quality Control"]
    },
    {
      title: "Mikocheni Residential Estate",
      category: "Residential",
      location: "Dar es Salaam",
      description: "Community water treatment system serving 500+ families with clean, safe drinking water.",
      image: portfolio5,
      capacity: "2,000L/hr",
      systems: ["Community RO", "UV Treatment", "Distribution Network"]
    },
    {
      title: "Mwanza Water Vendors Hub",
      category: "Commercial",
      location: "Mwanza",
      description: "Centralized water treatment facility serving multiple water vendors and small businesses in the region.",
      image: portfolio6,
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-energy rounded-full mb-4 shadow-joy pulse-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Comprehensive water treatment solutions tailored for Tanzania's industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group bg-gradient-card shadow-medium hover:shadow-joy transition-all duration-normal hover:-translate-y-4 hover-rainbow slide-in-up delay-${(index + 1) * 200}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gradient-primary backdrop-blur-sm rounded-full p-3 pulse-glow">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="group-hover:bg-gradient-energy group-hover:text-white group-hover:border-transparent transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">IDS Water Tech?</span>
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
                  <Button size="lg" className="bg-gradient-energy hover:bg-gradient-joy shadow-joy hover-rainbow">
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
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-joy-teal rounded-full mr-2 pulse-glow"></div>
                      {project.location}
                    </div>
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