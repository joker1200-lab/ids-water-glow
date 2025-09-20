import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Industrial Water Treatment Plant",
      category: "Industrial",
      client: "Tanzania Manufacturing Co.",
      location: "Dar es Salaam, Tanzania",
      date: "March 2024",
      image: portfolio1,
      capacity: "10,000 L/hr",
      description: "Complete reverse osmosis system installation for large-scale manufacturing facility. Achieved 99.9% water purity for production processes.",
      technologies: ["Reverse Osmosis", "Multi-Stage Filtration", "Automated Controls"],
      results: ["50% reduction in water costs", "Improved product quality", "99.9% purity achieved"]
    },
    {
      id: 2,
      title: "Hotel Water Purification System",
      category: "Commercial",
      client: "Safari Grand Hotel",
      location: "Arusha, Tanzania",
      date: "February 2024",
      image: portfolio2,
      capacity: "5,000 L/hr",
      description: "Comprehensive water treatment solution for 200-room luxury hotel including drinking water, kitchen, and laundry systems.",
      technologies: ["UV Sterilization", "Carbon Filtration", "Water Softening"],
      results: ["Guest satisfaction improved", "30% operational cost reduction", "Zero water quality complaints"]
    },
    {
      id: 3,
      title: "Smart Water Monitoring System",
      category: "Technology",
      client: "Mwanza Water Authority",
      location: "Mwanza, Tanzania",
      date: "January 2024",
      image: portfolio3,
      capacity: "Real-time monitoring",
      description: "Advanced IoT-based water quality monitoring and control system with real-time alerts and automated adjustments.",
      technologies: ["IoT Sensors", "Cloud Monitoring", "Automated Controls"],
      results: ["24/7 monitoring capability", "Reduced maintenance costs", "Proactive system management"]
    },
    {
      id: 4,
      title: "Municipal Water Treatment Facility",
      category: "Municipal",
      client: "Dodoma Municipality",
      location: "Dodoma, Tanzania",
      date: "December 2023",
      image: portfolio4,
      capacity: "50,000 L/hr",
      description: "Large-scale municipal water treatment facility serving 100,000+ residents with advanced filtration and purification systems.",
      technologies: ["Multi-Media Filtration", "Chlorination", "pH Adjustment"],
      results: ["100,000+ people served", "WHO standards compliance", "Sustainable water supply"]
    },
    {
      id: 5,
      title: "Hospital Water Purification",
      category: "Healthcare",
      client: "Kilimanjaro Medical Centre",
      location: "Moshi, Tanzania",
      date: "November 2023",
      image: portfolio5,
      capacity: "3,000 L/hr",
      description: "Medical-grade water purification system for surgical suites, laboratories, and patient care areas with stringent quality controls.",
      technologies: ["Medical Grade RO", "Deionization", "Sterile Storage"],
      results: ["Medical standards met", "Zero contamination incidents", "Enhanced patient safety"]
    },
    {
      id: 6,
      title: "Food Processing Water System",
      category: "Food Industry",
      client: "East Africa Food Processing",
      location: "Mbeya, Tanzania",
      date: "October 2023",
      image: portfolio6,
      capacity: "8,000 L/hr",
      description: "Food-grade water treatment system for beverage and food processing facility with HACCP compliance and quality assurance.",
      technologies: ["Food Grade Filtration", "Ozone Treatment", "CIP Systems"],
      results: ["HACCP compliance achieved", "Product shelf-life improved", "Export quality standards met"]
    },
    {
      id: 7,
      title: "School Water Safety Project",
      category: "Education",
      client: "International School of Tanzania",
      location: "Dar es Salaam, Tanzania",
      date: "September 2023",
      image: equipment1,
      capacity: "2,000 L/hr",
      description: "Safe drinking water system for 1,500 students and staff with child-friendly design and educational components.",
      technologies: ["Compact RO Units", "UV Disinfection", "Smart Dispensers"],
      results: ["1,500+ students served", "Health incidents reduced", "Educational impact achieved"]
    },
    {
      id: 8,
      title: "Resort Water Management",
      category: "Hospitality",
      client: "Zanzibar Beach Resort",
      location: "Zanzibar, Tanzania",
      date: "August 2023",
      image: equipment2,
      capacity: "7,000 L/hr",
      description: "Comprehensive water treatment for luxury beach resort including pools, spas, and guest facilities with coral reef protection.",
      technologies: ["Seawater Desalination", "Pool Treatment", "Wastewater Recovery"],
      results: ["Eco-friendly operations", "Guest experience enhanced", "Coral reef protection"]
    },
    {
      id: 9,
      title: "Mining Operations Water Treatment",
      category: "Mining",
      client: "Tanzania Gold Mining Ltd",
      location: "Geita, Tanzania",
      date: "July 2023",
      image: equipment3,
      capacity: "15,000 L/hr",
      description: "Heavy-duty water treatment for mining operations including process water, drinking water, and environmental compliance.",
      technologies: ["Heavy Metal Removal", "Sedimentation", "Chemical Treatment"],
      results: ["Environmental compliance", "Worker safety improved", "Operational efficiency gained"]
    }
  ];

  const categories = ["all", "Industrial", "Commercial", "Healthcare", "Municipal", "Technology", "Food Industry", "Education", "Hospitality", "Mining"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: "50+", label: "Completed Projects" },
    { number: "500,000+", label: "People Served" },
    { number: "99.9%", label: "Success Rate" },
    { number: "15+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Showcasing successful water treatment projects across Tanzania and East Africa
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center slide-in-up delay-${index * 100}`}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 slide-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-primary" : "hover:bg-primary hover:text-primary-foreground"}
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className={`group bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 cursor-pointer slide-in-up delay-${(index % 3 + 1) * 100}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-slow"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <ExternalLink className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>{project.capacity}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Project Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Client:</span>
                            <span className="font-medium">{project.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span className="font-medium">{project.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Completed:</span>
                            <span className="font-medium">{project.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Capacity:</span>
                            <span className="font-medium">{project.capacity}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Project Description</h4>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <div className="h-2 w-2 bg-success rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Ready for Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto slide-in-up delay-200">
            Join our growing list of satisfied clients across Tanzania and East Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up delay-300">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;