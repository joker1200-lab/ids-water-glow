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
          answer: "We offer a comprehensive range of water treatment systems including reverse osmosis systems, industrial filtration units, UV sterilization systems, water softeners, and custom-designed solutions for specific industrial applications."
        },
        {
          question: "How long does installation typically take?",
          answer: "Installation time varies depending on system complexity. Simple residential systems can be installed in 4-6 hours, while industrial systems may take 2-5 days. We'll provide a detailed timeline during our consultation."
        },
        {
          question: "Do you provide maintenance services?",
          answer: "Yes, we offer comprehensive maintenance services including scheduled maintenance, emergency repairs, filter replacements, and system optimization. Our 24/7 support ensures your systems run smoothly year-round."
        },
        {
          question: "What areas do you serve in Tanzania?",
          answer: "We serve all major cities and regions in Tanzania including Dar es Salaam, Arusha, Mwanza, Dodoma, and surrounding areas. We also provide services to other East African countries upon request."
        }
      ]
    },
    {
      title: "Technical Information", 
      icon: MessageCircle,
      questions: [
        {
          question: "How does reverse osmosis work?",
          answer: "Reverse osmosis uses a semi-permeable membrane to remove dissolved solids, bacteria, and contaminants from water. Water is forced through the membrane under pressure, leaving contaminants behind and producing clean, pure water."
        },
        {
          question: "What water quality can I expect after treatment?",
          answer: "Our systems typically achieve 99.9% removal of dissolved solids, bacteria, and harmful contaminants. Final water quality meets or exceeds WHO standards and local Tanzanian water quality regulations."
        },
        {
          question: "How often should filters be replaced?",
          answer: "Filter replacement frequency depends on water quality and usage. Pre-filters typically need replacement every 3-6 months, while RO membranes last 2-3 years. We provide replacement schedules and reminders."
        },
        {
          question: "Can systems handle high-TDS water?",
          answer: "Yes, our systems are specifically designed for Tanzania's water conditions, including high Total Dissolved Solids (TDS) levels. We customize systems based on your specific water analysis results."
        }
      ]
    },
    {
      title: "Business & Pricing",
      icon: Search,
      questions: [
        {
          question: "How much do water treatment systems cost?",
          answer: "Costs vary based on system size, technology, and requirements. Residential systems start from TSh 2,000,000, while industrial systems range from TSh 10,000,000+. We provide free quotes after site assessment."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we offer flexible financing options including installment plans and leasing programs for both residential and commercial customers. Contact us to discuss available options."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranties: 2 years on residential systems, 3 years on commercial systems, plus extended warranty options. All installations include 1-year free maintenance service."
        },
        {
          question: "How long is the payback period?",
          answer: "Most clients see return on investment within 12-24 months through savings on bottled water, reduced equipment maintenance, and improved operational efficiency. We provide detailed ROI calculations."
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
                <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
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