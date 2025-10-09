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
import waterTreatmentPlant from "@/assets/water-treatment-plant.jpg";
import spareParts from "@/assets/spare-parts.jpg";
import waterSoftenerSystem from "@/assets/water-softener-system.jpg";
import industrialFiltration from "@/assets/industrial-filtration.jpg";
import industrialPumps from "@/assets/industrial-pumps.jpg";
import ownerEquipment from "@/assets/owner-equipment.jpg";
import waterTreatmentChemicals from "@/assets/water-treatment-chemicals.jpg";
import waterHardnessTestKit from "@/assets/water-hardness-test-kit.jpg";
import laboratoryTesting from "@/assets/laboratory-testing.jpg";

const Services = () => {
  const allServices = [
    {
      icon: Droplets,
      title: "Water Purification Systems",
      description: "Advanced water purification systems for clean, safe drinking water",
      image: waterTreatmentPlant,
      features: ["Reverse Osmosis Systems", "Multi-Stage Filtration", "UV Sterilization", "Custom Design Solutions"]
    },
    {
      icon: Settings,
      title: "Water Purification Plants Spareparts",
      description: "Genuine spare parts and components for all water treatment equipment",
      image: spareParts,
      features: ["Original Equipment Parts", "Compatible Components", "Filter Cartridges", "Pump Parts & Accessories"]
    },
    {
      icon: Droplets,
      title: "Water Softener Units",
      description: "High-quality water softening systems for hard water treatment",
      image: waterSoftenerSystem,
      features: ["Ion Exchange Systems", "Salt-Based Softeners", "Automatic Regeneration", "Commercial & Residential"]
    },
    {
      icon: TestTube,
      title: "Different Type of Filters",
      description: "Wide range of filtration solutions for various water treatment needs",
      image: industrialFiltration,
      features: ["Sediment Filters", "Carbon Filters", "Membrane Filters", "Specialty Filters"]
    },
    {
      icon: Settings,
      title: "Food Grade Industrial Pumps",
      description: "Specialized pumps designed for food processing and industrial applications",
      image: industrialPumps,
      features: ["Sanitary Design", "Corrosion Resistant", "High Efficiency", "Easy Maintenance"]
    },
    {
      icon: Factory,
      title: "Water Treatment Chemicals",
      description: "High-quality chemicals for water treatment and purification processes",
      image: waterTreatmentChemicals,
      features: ["Coagulants", "Flocculants", "Disinfectants", "pH Adjusters"]
    },
    {
      icon: Wrench,
      title: "Water Hardness Test Kits",
      description: "Professional testing equipment for water quality analysis and monitoring",
      image: laboratoryTesting,
      features: ["Digital Test Meters", "Chemical Test Strips", "Laboratory Analysis", "Quality Monitoring"]
    }
  ];

  const additionalService = {
    icon: Shield,
    title: "Installation & Support",
    description: "Professional installation and ongoing technical support services"
  };

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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Comprehensive water treatment solutions designed for Tanzania's diverse industrial and commercial needs
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg slide-in-up delay-300">
            Request Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Complete water treatment solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Card key={index} className="bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 slide-in-up" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Card className="bg-card shadow-md hover:shadow-lg transition-all duration-300 max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                  <additionalService.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{additionalService.title}</h3>
                <p className="text-muted-foreground mb-6">{additionalService.description}</p>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto slide-in-up delay-200">
            Contact us today for a free consultation and customized water treatment solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up delay-300">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call +255 755 652588
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;