import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Factory, 
  Wrench, 
  TestTube, 
  Settings, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import ownerEquipment from "@/assets/owner-equipment.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Droplets,
      title: "Water Purification Systems",
      description: "Advanced water purification systems for clean, safe drinking water",
      image: equipment1,
      features: ["Reverse Osmosis Systems", "Multi-Stage Filtration", "UV Sterilization", "Custom Design Solutions"]
    },
    {
      icon: Settings,
      title: "Water Purification Plants Spareparts",
      description: "Genuine spare parts and components for all water treatment equipment",
      image: equipment2,
      features: ["Original Equipment Parts", "Compatible Components", "Filter Cartridges", "Pump Parts & Accessories"]
    },
    {
      icon: Droplets,
      title: "Water Softener Units",
      description: "High-quality water softening systems for hard water treatment",
      image: equipment3,
      features: ["Ion Exchange Systems", "Salt-Based Softeners", "Automatic Regeneration", "Commercial & Residential"]
    }
  ];

  const additionalServices = [
    {
      icon: TestTube,
      title: "Different Type of Filters",
      description: "Wide range of filtration solutions for various water treatment needs"
    },
    {
      icon: Settings,
      title: "Food Grade Industrial Pumps",
      description: "Specialized pumps designed for food processing and industrial applications"
    },
    {
      icon: Shield,
      title: "Installation & Support",
      description: "Professional installation and ongoing technical support services"
    }
  ];

  const industries = [
    "Food & Beverage Processing",
    "Pharmaceutical Manufacturing", 
    "Healthcare Facilities",
    "Hotels & Hospitality",
    "Educational Institutions",
    "Government Buildings",
    "Commercial Offices",
    "Residential Complexes"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Comprehensive water treatment solutions designed for Tanzania's diverse industrial and commercial needs
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong slide-in-up delay-300">
            Request Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-gradient-primary hover:bg-primary-dark shadow-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative slide-in-right`}>
                  <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-3xl shadow-strong w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
              Additional <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Complete support for all your water treatment needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-4 slide-in-up delay-${(index + 1) * 200}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    Get Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Industries We <span className="text-primary">Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our water treatment solutions support a wide range of industries across Tanzania and East Africa
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative slide-in-right">
              <img
                src={ownerEquipment}
                alt="Industrial water treatment"
                className="rounded-3xl shadow-strong w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto slide-in-up delay-200">
            Contact us today for a free consultation and customized water treatment solution
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

export default Services;