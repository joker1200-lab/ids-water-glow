import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ownerEquipment from "@/assets/owner-equipment.jpg";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Cutting-edge water treatment technology adapted for Tanzania's unique needs"
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Uncompromising commitment to delivering the highest water purity standards"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with our clients across East Africa"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Certified solutions that exceed international quality benchmarks"
    }
  ];

  const team = [
    {
      name: "Engineering Team",
      role: "Technical Excellence",
      description: "Skilled engineers specializing in water treatment technology and system design"
    },
    {
      name: "Installation Crew", 
      role: "Professional Setup",
      description: "Experienced technicians ensuring perfect installation and system optimization"
    },
    {
      name: "Support Staff",
      role: "Customer Care",
      description: "Dedicated support team providing 24/7 assistance and maintenance services"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-accent">IDS Water Tech</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Leading Tanzania's water treatment revolution with innovative solutions for industrial and commercial applications
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative slide-in-right">
              <img
                src={ownerEquipment}
                alt="IDS Water Tech team"
                className="rounded-3xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Founded with a vision to provide clean, safe water solutions across Tanzania, IDS Water Tech has grown from a small local operation to one of East Africa's most trusted water treatment companies.
                </p>
                <p>
                  Our journey began with a simple understanding: access to clean water is fundamental to health, prosperity, and industrial success. Today, we serve over 500 clients across various sectors.
                </p>
                <p>
                  With over 10 years of experience and 1000+ successful installations, we continue to innovate and adapt our solutions to meet the evolving needs of Tanzania's growing economy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 slide-in-right">
              <img
                src={equipment1}
                alt="Water treatment facility"
                className="rounded-lg shadow-medium h-48 w-full object-cover"
              />
              <img
                src={equipment2}
                alt="Industrial equipment"
                className="rounded-lg shadow-medium h-48 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              The principles that guide everything we do at IDS Water Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 slide-in-up delay-${(index + 1) * 100}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
              Experienced professionals dedicated to delivering exceptional water treatment solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal slide-in-up delay-${(index + 1) * 200}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto slide-in-up delay-200">
            To provide innovative, reliable, and sustainable water treatment solutions that improve health, support industrial growth, and contribute to Tanzania's development while maintaining the highest standards of quality and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up delay-300">
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;