import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import ownerEquipment from "@/assets/owner-equipment.jpg";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Water Treatment in Tanzania: Emerging Technologies and Sustainable Solutions",
    excerpt: "As Tanzania continues its rapid industrial growth, the demand for clean, reliable water treatment solutions has never been higher. Explore the innovative technologies and sustainable practices shaping the future of water treatment across East Africa, from smart monitoring systems to energy-efficient purification methods that are revolutionizing how we approach water quality management.",
    image: ownerEquipment,
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Industry Insights",
    author: "Dr. James Mwenda, Technical Director"
  };

  const blogPosts = [
    {
      title: "Industrial Water Treatment Best Practices for Tanzania's Manufacturing Sector",
      excerpt: "A comprehensive guide to implementing world-class water treatment standards in manufacturing facilities across Tanzania. Learn about regulatory compliance, system design principles, maintenance protocols, and cost optimization strategies that have helped over 200 local manufacturers achieve consistent water quality while reducing operational costs by up to 40%.",
      image: equipment1,
      date: "March 10, 2024", 
      readTime: "10 min read",
      category: "Technical Guide",
      author: "Eng. Sarah Moshi, Process Engineer"
    },
    {
      title: "Reverse Osmosis Technology: Complete Guide for East African Applications",
      excerpt: "Understanding how RO systems work in Tanzania's unique water conditions is crucial for successful implementation. This detailed technical guide covers membrane selection, pre-treatment requirements, system sizing, energy optimization, and maintenance schedules specifically designed for high-TDS water sources common across East Africa.",
      image: equipment2,
      date: "March 5, 2024",
      readTime: "8 min read", 
      category: "Technology",
      author: "Dr. Michael Temba, Water Quality Specialist"
    },
    {
      title: "Tanzania Water Quality Standards: 2024 Compliance Requirements and Updates",
      excerpt: "Stay up-to-date with the latest Tanzania Bureau of Standards (TBS) water quality regulations and WHO guidelines. This comprehensive overview covers new compliance requirements, testing protocols, documentation standards, and certification processes for commercial and industrial water treatment systems operating in Tanzania.",
      image: equipment3,
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Compliance",
      author: "Martha Kulwa, Quality Assurance Manager"
    },
    {
      title: "Preventive Maintenance Strategies: Maximizing Water Treatment System Lifespan",
      excerpt: "Discover proven maintenance strategies that have extended system lifespan by 50% while reducing emergency repairs by 80%. Learn about predictive maintenance techniques, seasonal preparation protocols, staff training programs, and digital monitoring tools that keep your water treatment investment performing optimally year after year.",
      image: equipment1,
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Maintenance",
      author: "Joseph Msami, Service Operations Manager"
    },
    {
      title: "Sustainable Water Solutions for Tanzania's Hospitality Industry",
      excerpt: "How Tanzania's hotels and resorts are implementing eco-friendly water treatment systems to reduce environmental impact while cutting operational costs. Case studies from leading hospitality brands show how integrated water management systems have achieved 60% water savings and eliminated single-use plastic bottles.",
      image: equipment2,
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "Hospitality",
      author: "Grace Nyagawa, Sustainability Consultant"
    },
    {
      title: "Water Treatment ROI Calculator: Making the Business Case for Quality Systems",
      excerpt: "Understanding the complete financial picture of water treatment investments is essential for smart business decisions. This detailed analysis covers direct cost savings, productivity improvements, compliance benefits, and hidden costs of poor water quality. Includes downloadable ROI calculator and real-world case studies from Tanzanian businesses.",
      image: equipment3,
      date: "February 10, 2024",
      readTime: "6 min read",
      category: "Business",
      author: "Peter Mathias, Business Development Director"
    },
    {
      title: "Smart Water Monitoring: IoT Solutions for Real-Time Quality Management",
      excerpt: "The digital transformation of water treatment is here. Explore how Internet of Things (IoT) sensors, cloud-based monitoring, and artificial intelligence are revolutionizing water quality management in Tanzania. Learn about implementation costs, benefits, and practical applications for businesses of all sizes.",
      image: equipment1,
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Technology",
      author: "Dr. Ahmed Hassan, Innovation Manager"
    },
    {
      title: "Healthcare Water Systems: Meeting Medical-Grade Standards in Tanzania",
      excerpt: "Medical facilities require the highest water quality standards for patient safety and equipment protection. This specialized guide covers medical-grade water treatment requirements, sterilization protocols, validation procedures, and compliance with international healthcare standards for Tanzanian medical facilities.",
      image: equipment2,
      date: "January 30, 2024",
      readTime: "8 min read",
      category: "Healthcare",
      author: "Dr. Amina Kijazi, Healthcare Systems Specialist"
    },
    {
      title: "Energy-Efficient Water Treatment: Reducing Operational Costs in Tanzania",
      excerpt: "With rising energy costs, optimizing water treatment system efficiency is more important than ever. Discover energy-saving technologies, solar integration options, and operational strategies that have reduced energy consumption by up to 45% while maintaining optimal water quality in Tanzanian facilities.",
      image: equipment3,
      date: "January 25, 2024",
      readTime: "10 min read",
      category: "Efficiency",
      author: "Eng. Daniel Mwanga, Energy Systems Consultant"
    }
  ];

  const categories = [
    "All Posts", "Industry Insights", "Technical Guide", "Technology", 
    "Compliance", "Maintenance", "Hospitality", "Business", "Healthcare", 
    "Efficiency", "Sustainability", "Case Studies"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 slide-in-up">
            Water Treatment <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto slide-in-up delay-200">
            Expert insights, industry updates, and practical guidance for water treatment solutions in Tanzania
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 slide-in-up">Featured Article</h2>
          </div>
          
          <Card className="bg-gradient-card shadow-strong hover:shadow-glow transition-all duration-normal slide-in-up delay-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-lg">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link to="/blog/future-water-treatment-tanzania">
                    <Button className="bg-gradient-primary hover:bg-primary-dark">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 slide-in-up">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-primary" : "hover:bg-primary hover:text-primary-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 slide-in-up delay-${(index % 3 + 1) * 100}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    <Link to="/blog/future-water-treatment-tanzania" className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto slide-in-up delay-200">
            Subscribe to our newsletter for the latest water treatment insights, industry updates, and technical guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto slide-in-up delay-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-primary-foreground border-0 focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;