import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Shield, Wrench, Award, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";

// Import images
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import ownerEquipment from "@/assets/owner-equipment.jpg";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-primary-foreground">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 slide-in-left">
                  Clean Water
                  <span className="block text-accent">For Tanzania</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 opacity-90 slide-in-left delay-200">
                  Leading water treatment solutions for industrial and commercial applications across East Africa
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 slide-in-left delay-300">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong text-sm sm:text-base">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm sm:text-base">
                    View Our Work
                  </Button>
                </div>
              </div>
              
              <div className="relative slide-in-right delay-400 mt-8 lg:mt-0">
                <div className="absolute -inset-2 lg:-inset-4 bg-gradient-primary rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={ownerEquipment}
                  alt="Professional water treatment equipment"
                  className="relative rounded-2xl lg:rounded-3xl shadow-strong w-full h-auto object-cover"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
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
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Comprehensive water treatment solutions tailored for Tanzania's industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`group bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-4 slide-in-up delay-${(index + 1) * 200}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
                  <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark shadow-medium">
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

      {/* Testimonials Section */}
      <Testimonials />

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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call +255 123 456 789
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;