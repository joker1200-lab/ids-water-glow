import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import ownerEquipment from "@/assets/owner-equipment.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    "Water Purification Systems",
    "Industrial Water Treatment", 
    "System Maintenance",
    "Water Quality Testing",
    "System Installation",
    "Consultation Services",
    "Other"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Dar es Salaam, Tanzania", "Serving all of East Africa"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 123 456 789", "+255 987 654 321"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@idswatertech.com", "support@idswatertech.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"]
    }
  ];

  const whatsappNumber = "+255123456789";
  const openWhatsApp = () => {
    const url = "https://whatsapp.com/dl/";
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Ready to transform your water quality? Get in touch with our experts for personalized solutions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 slide-in-up delay-${(index + 1) * 100}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm mb-1">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="bg-gradient-card shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                    <Send className="h-6 w-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="+255 123 456 789"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-2"
                        placeholder="Tell us about your water treatment needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-primary-dark shadow-medium">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Image & Quick Contact */}
            <div className="space-y-8 slide-in-right">
              <div className="relative">
                <img
                  src={ownerEquipment}
                  alt="IDS Water Tech team"
                  className="rounded-3xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Water Solutions</h3>
                  <p className="opacity-90">Professional consultation & installation</p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <Card className="bg-gradient-card shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Quick Contact</span>
                  </h3>
                  <div className="space-y-4">
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                      <Phone className="mr-2 h-5 w-5" />
                      Call +255 123 456 789
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-card shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 slide-in-up">
              Why Choose <span className="text-primary">IDS Water Tech?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "24/7 Emergency Support",
              "Free Consultation & Quote",
              "Certified Installation Team",
              "2-Year Warranty Coverage",
              "Local Tanzania Expertise",
              "ISO Quality Standards"
            ].map((feature, index) => (
              <div key={index} className={`flex items-center space-x-3 slide-in-up delay-${(index % 3 + 1) * 100}`}>
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;