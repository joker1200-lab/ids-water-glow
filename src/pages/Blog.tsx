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
    title: "The Future of Water Treatment in Tanzania",
    excerpt: "Exploring innovative technologies and sustainable solutions for Tanzania's growing water treatment needs in 2024 and beyond.",
    image: ownerEquipment,
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    author: "IDS Water Tech Team"
  };

  const blogPosts = [
    {
      title: "Industrial Water Treatment Best Practices",
      excerpt: "Essential guidelines for maintaining optimal water quality in manufacturing processes across East Africa.",
      image: equipment1,
      date: "March 10, 2024", 
      readTime: "6 min read",
      category: "Technical Guide",
      author: "Engineering Team"
    },
    {
      title: "Reverse Osmosis Technology Explained",
      excerpt: "Understanding how RO systems work and why they're crucial for clean water production in industrial settings.",
      image: equipment2,
      date: "March 5, 2024",
      readTime: "5 min read", 
      category: "Technology",
      author: "Technical Experts"
    },
    {
      title: "Water Quality Standards in Tanzania",
      excerpt: "Comprehensive overview of national water quality regulations and compliance requirements for businesses.",
      image: equipment3,
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Compliance",
      author: "Quality Assurance"
    },
    {
      title: "Maintenance Tips for Water Treatment Systems",
      excerpt: "Proactive maintenance strategies to ensure optimal performance and longevity of your water treatment investment.",
      image: equipment1,
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Maintenance",
      author: "Service Team"
    },
    {
      title: "Sustainable Water Solutions for Hotels",
      excerpt: "How Tanzania's hospitality industry can implement eco-friendly water treatment systems to reduce costs and environmental impact.",
      image: equipment2,
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Hospitality",
      author: "Industry Specialists"
    },
    {
      title: "Water Treatment ROI Calculator",
      excerpt: "Understanding the financial benefits and return on investment when upgrading to modern water treatment systems.",
      image: equipment3,
      date: "February 10, 2024",
      readTime: "5 min read",
      category: "Business",
      author: "Business Development"
    }
  ];

  const categories = [
    "All Posts", "Industry Insights", "Technical Guide", "Technology", 
    "Compliance", "Maintenance", "Hospitality", "Business"
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
                  <Button className="bg-gradient-primary hover:bg-primary-dark">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
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