import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, ArrowRight, Droplets, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "General Questions",
      icon: Droplets,
      questions: [
        {
          question: "What types of water treatment systems do you offer?",
          answer: "We offer a comprehensive range of water treatment systems including reverse osmosis systems, industrial filtration units, UV sterilization systems, water softeners, deionization systems, ultrafiltration, nanofiltration, and custom-designed solutions for specific industrial applications. Our systems range from small residential units to large industrial plants capable of processing thousands of liters per hour."
        },
        {
          question: "How long does installation typically take?",
          answer: "Installation time varies depending on system complexity and size. Small residential systems (under 500 L/hr) can be installed in 4-8 hours. Commercial systems (500-5,000 L/hr) typically take 1-3 days. Large industrial systems (5,000+ L/hr) may require 3-14 days depending on complexity, site preparation, and integration requirements. We provide detailed project timelines during our consultation."
        },
        {
          question: "Do you provide maintenance services?",
          answer: "Yes, we offer comprehensive maintenance packages including scheduled preventive maintenance, emergency repairs, filter replacements, system optimization, performance monitoring, and staff training. Our maintenance packages include quarterly system checks, annual comprehensive servicing, 24/7 emergency support hotline, genuine replacement parts, and performance guarantee. We also offer remote monitoring for industrial systems."
        },
        {
          question: "What areas do you serve in Tanzania?",
          answer: "We serve all regions of Tanzania including Dar es Salaam, Arusha, Mwanza, Dodoma, Mbeya, Tanga, Morogoro, Tabora, Kigoma, Mtwara, Lindi, Rukwa, Ruvuma, Iringa, Kagera, Geita, Katavi, Njombe, Simiyu, and Songwe. We also provide services across East Africa including Kenya, Uganda, Rwanda, Burundi, and parts of the Democratic Republic of Congo upon request."
        },
        {
          question: "What certifications and standards do you follow?",
          answer: "All our systems comply with WHO (World Health Organization) water quality guidelines, Tanzania Bureau of Standards (TBS) requirements, international quality standards, and NSF/ANSI standards for water treatment equipment. Our technicians are certified in water treatment technology, and we maintain partnerships with internationally recognized equipment manufacturers."
        },
        {
          question: "Do you offer training for our staff?",
          answer: "Yes, we provide comprehensive training programs for your maintenance staff including system operation procedures, basic troubleshooting, filter replacement protocols, water quality testing, record keeping, and emergency procedures. Training includes hands-on sessions, operational manuals in English and Swahili, certification upon completion, and ongoing technical support."
        }
      ]
    },
    {
      title: "Technical Information", 
      icon: MessageCircle,
      questions: [
        {
          question: "How does reverse osmosis work?",
          answer: "Reverse osmosis uses a semi-permeable membrane to remove dissolved solids, bacteria, viruses, and contaminants from water. Water is forced through the membrane under pressure (typically 150-300 PSI), allowing only pure water molecules to pass through while rejecting contaminants. The process removes 95-99% of dissolved salts, 99.9% of bacteria and viruses, heavy metals, pesticides, and other harmful substances. The rejected contaminants are flushed away as concentrate water."
        },
        {
          question: "What water quality can I expect after treatment?",
          answer: "Our systems consistently achieve exceptional water quality: TDS reduction of 95-99%, bacteria and virus removal of 99.9+%, heavy metal removal of 95-99%, chlorine removal of 99%, pesticide removal of 95-99%, and turbidity reduction to <0.1 NTU. Final water quality meets or exceeds WHO drinking water guidelines, Tanzania Bureau of Standards specifications, and international standards for potable water."
        },
        {
          question: "How often should filters be replaced?",
          answer: "Filter replacement schedules depend on water quality and usage: Sediment pre-filters every 2-6 months, Carbon pre-filters every 3-12 months, RO membranes every 2-4 years, Post-carbon filters every 6-12 months, and UV lamps annually. We provide automated replacement reminders, maintain service logs, and offer filter replacement services with genuine components."
        },
        {
          question: "Can systems handle high-TDS water?",
          answer: "Yes, our systems are specifically engineered for Tanzania's challenging water conditions including high TDS (up to 5,000 ppm), high hardness, iron content, and seasonal variations. We conduct detailed water analysis, design custom pre-treatment systems, select appropriate membrane types, and optimize system configuration for your specific water chemistry. Multi-stage treatment ensures consistent performance even with difficult source water."
        },
        {
          question: "What is the difference between RO and UV systems?",
          answer: "RO systems remove dissolved solids, salts, heavy metals, and contaminants through membrane filtration, producing pure water but slower flow rates. UV systems kill bacteria and viruses using ultraviolet light but don't remove dissolved solids or chemicals, providing fast flow rates. We often combine both technologies: RO for purification + UV for final disinfection, ensuring both chemical and biological safety."
        },
        {
          question: "How do you ensure consistent water pressure?",
          answer: "We use pressure booster pumps, pressure tanks, variable frequency drives (VFDs), pressure sensors, and automated controls to maintain consistent system pressure. For areas with irregular water supply, we design systems with storage tanks, backup pumps, and pressure management systems to ensure reliable operation 24/7."
        }
      ]
    },
    {
      title: "Business & Pricing",
      icon: Search,
      questions: [
        {
          question: "How much do water treatment systems cost?",
          answer: "System costs vary based on capacity, technology, and application: Residential systems (100-500 L/hr): TSh 2,000,000 - 8,000,000, Small commercial (500-2,000 L/hr): TSh 8,000,000 - 25,000,000, Industrial systems (2,000+ L/hr): TSh 25,000,000 - 200,000,000+. Costs include equipment, installation, commissioning, training, and 1-year warranty. We provide detailed quotations after free site assessment and water analysis."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we offer flexible financing solutions: Equipment leasing (3-7 years), Bank financing partnerships with reduced interest rates, Installment payment plans, Rent-to-own options, and Corporate credit facilities. We work with local banks including NMB, CRDB, and Stanbic to provide competitive financing. Down payments can be as low as 20% for qualified customers."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranty coverage: 2 years full warranty on residential systems, 3-5 years on commercial/industrial systems, 1 year on-site service warranty, Lifetime technical support, Extended warranty options up to 10 years, Free replacement parts during warranty period, and 24-hour emergency response. Warranty covers all components, labor, and system performance guarantees."
        },
        {
          question: "How long is the payback period?",
          answer: "ROI typically achieved within: Residential: 12-18 months (vs. bottled water costs), Commercial: 8-15 months (operational savings + water quality), Industrial: 6-12 months (equipment protection + efficiency). Savings come from reduced bottled water purchases, lower equipment maintenance, improved product quality, reduced downtime, and health benefits. We provide detailed ROI analysis with each proposal."
        },
        {
          question: "Do you provide performance guarantees?",
          answer: "Yes, we guarantee system performance including water quality specifications, flow rate delivery, uptime reliability (98%+ for industrial systems), energy efficiency targets, and component lifespan. If systems don't meet guaranteed specifications, we provide free upgrades, modifications, or replacement. Performance bonds available for large projects."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept multiple payment options: Bank transfers (local and international), Cash payments, Mobile money (M-Pesa, Tigo Pesa, Airtel Money), Corporate checks, Letters of credit for large projects, and Financing through our banking partners. We also accept payments in USD for international clients and provide official receipts and invoices for all transactions."
        }
      ]
    },
    {
      title: "Installation & Support",
      icon: MessageCircle,
      questions: [
        {
          question: "What does the installation process involve?",
          answer: "Our installation process includes: Site survey and water analysis, System design and engineering drawings, Site preparation and infrastructure requirements, Professional installation by certified technicians, System commissioning and testing, Staff training and handover, Documentation and warranty registration. We handle all aspects including electrical connections, plumbing, and integration with existing systems."
        },
        {
          question: "Do you provide emergency support?",
          answer: "Yes, we offer 24/7 emergency support including emergency hotline (+255 755 65258), On-site response within 4 hours in Dar es Salaam (24 hours other regions), Emergency repair services, Temporary backup solutions, Remote troubleshooting support, and Emergency parts availability. Critical systems receive priority response with guaranteed uptime."
        },
        {
          question: "Can you upgrade existing systems?",
          answer: "Absolutely! We specialize in system upgrades including capacity expansion, technology updates, automation integration, efficiency improvements, compliance upgrades, and performance optimization. We assess existing systems, recommend improvements, and integrate new components with minimal downtime. Financing available for upgrade projects."
        },
        {
          question: "What about spare parts availability?",
          answer: "We maintain comprehensive spare parts inventory including filters, membranes, pumps, control components, UV lamps, and system accessories. Parts availability: Common filters and components (same-day delivery), Specialized membranes and pumps (2-5 days), Custom components (1-2 weeks), Emergency parts (24-hour availability), and Genuine manufacturer parts with warranties."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Find answers to common questions about our water treatment systems and services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto slide-in-up delay-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-foreground bg-primary-foreground border-0 focus:ring-2 focus:ring-accent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">Try searching with different keywords or browse all categories</p>
              <Button onClick={() => setSearchTerm("")} className="bg-gradient-primary">
                Show All FAQs
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className={`slide-in-up delay-${(categoryIndex + 1) * 200}`}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-gradient-primary rounded-full p-3 shadow-glow">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  <Card className="bg-gradient-card shadow-medium">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-border">
                            <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-left">
                              <span className="font-semibold text-foreground">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-gradient-card shadow-strong slide-in-up">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our water treatment experts are ready to help you find the perfect solution for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark shadow-medium">
                    Contact Our Experts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    const message = "Hi! I have a question about your water treatment services.";
                    const phoneNumber = "255123456789";
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Quick Links</h3>
            <p className="text-muted-foreground">Find more information about our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services">
              <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Our Services</h4>
                  <p className="text-muted-foreground text-sm">Explore our complete range of water treatment solutions</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about">
              <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">About Us</h4>
                  <p className="text-muted-foreground text-sm">Learn more about IDS Water Tech and our mission</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/blog">
              <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Blog & Resources</h4>
                  <p className="text-muted-foreground text-sm">Read expert insights and technical guides</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;