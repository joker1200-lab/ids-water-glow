import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  BookOpen, 
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ownerEquipment from "@/assets/owner-equipment.jpg";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  // Sample blog post data - in a real app, this would come from a CMS or API
  const post = {
    id: 1,
    title: "The Future of Water Treatment in Tanzania: Emerging Technologies and Sustainable Solutions",
    excerpt: "As Tanzania continues its rapid industrial growth, the demand for clean, reliable water treatment solutions has never been higher.",
    content: `
      <h2>Introduction</h2>
      <p>Tanzania's industrial landscape is evolving rapidly, with manufacturing, hospitality, and healthcare sectors experiencing unprecedented growth. This expansion brings both opportunities and challenges, particularly in water treatment and quality management. As businesses scale up operations, the demand for reliable, efficient, and sustainable water treatment solutions has reached critical levels.</p>

      <p>At IDS Water Tech, we've witnessed firsthand the transformation of Tanzania's water treatment industry over the past decade. From simple filtration systems to sophisticated, IoT-enabled treatment plants, the technological advancement has been remarkable. This comprehensive guide explores the emerging technologies, sustainable practices, and innovative solutions that are shaping the future of water treatment across East Africa.</p>

      <h2>Current Water Treatment Landscape in Tanzania</h2>
      <p>Tanzania's unique geographical and climatic conditions present specific challenges for water treatment. High Total Dissolved Solids (TDS) levels, seasonal variations in water quality, and diverse industrial requirements demand customized solutions. Our analysis of over 500 installations across the country reveals several key trends:</p>

      <ul>
        <li><strong>Industrial Growth:</strong> Manufacturing sector water demand has increased by 180% since 2020</li>
        <li><strong>Quality Standards:</strong> Stricter compliance requirements driving technology upgrades</li>
        <li><strong>Sustainability Focus:</strong> 65% of new installations prioritize energy efficiency</li>
        <li><strong>Automation Adoption:</strong> Remote monitoring systems becoming standard in commercial applications</li>
      </ul>

      <h2>Emerging Technologies Revolutionizing Water Treatment</h2>
      
      <h3>1. Smart Monitoring and IoT Integration</h3>
      <p>The Internet of Things (IoT) is transforming water treatment from reactive maintenance to predictive management. Modern systems now feature:</p>
      <ul>
        <li>Real-time water quality monitoring with instant alerts</li>
        <li>Predictive maintenance algorithms reducing downtime by 70%</li>
        <li>Remote system control and optimization</li>
        <li>Data analytics for performance improvement</li>
      </ul>

      <h3>2. Advanced Membrane Technologies</h3>
      <p>New generation membranes are addressing Tanzania's challenging water conditions:</p>
      <ul>
        <li>High-rejection membranes for extreme TDS conditions</li>
        <li>Antimicrobial membranes reducing biofouling</li>
        <li>Energy-efficient designs lowering operational costs</li>
        <li>Extended lifespan membranes (4-6 years vs traditional 2-3 years)</li>
      </ul>

      <h3>3. Solar-Powered Water Treatment</h3>
      <p>With Tanzania's abundant solar resources, solar-powered systems are gaining traction:</p>
      <ul>
        <li>Hybrid solar-grid systems ensuring 24/7 operation</li>
        <li>Energy storage solutions for continuous operation</li>
        <li>ROI improvement through reduced electricity costs</li>
        <li>Environmental sustainability alignment</li>
      </ul>

      <h2>Industry-Specific Applications</h2>
      
      <h3>Manufacturing Sector</h3>
      <p>Tanzania's manufacturing boom requires specialized water treatment solutions. Food processing, textiles, and pharmaceuticals each have unique requirements. Our latest installations feature modular designs allowing for rapid capacity expansion as businesses grow.</p>

      <h3>Healthcare Facilities</h3>
      <p>Medical-grade water systems are becoming increasingly sophisticated, with validation protocols meeting international standards. Recent installations at major Tanzanian hospitals demonstrate how advanced purification technologies ensure patient safety while reducing operational costs.</p>

      <h3>Hospitality Industry</h3>
      <p>Tanzania's tourism sector demands consistent water quality across diverse applications - from guest amenities to food service. Integrated water management systems are helping hotels achieve sustainability goals while maintaining service excellence.</p>

      <h2>Sustainability and Environmental Impact</h2>
      <p>Environmental consciousness is driving innovation in water treatment design. Key sustainability trends include:</p>
      
      <ul>
        <li><strong>Water Recovery:</strong> Advanced systems achieving 85%+ recovery rates</li>
        <li><strong>Energy Efficiency:</strong> Variable frequency drives and energy recovery devices</li>
        <li><strong>Waste Minimization:</strong> Concentrate reuse and treatment technologies</li>
        <li><strong>Chemical Reduction:</strong> Alternative disinfection methods reducing chemical usage</li>
      </ul>

      <h2>Regulatory Landscape and Compliance</h2>
      <p>Tanzania's water quality regulations continue to evolve, aligning with international standards. The Tanzania Bureau of Standards (TBS) has updated requirements for industrial water systems, emphasizing:</p>
      
      <ul>
        <li>Regular third-party testing and validation</li>
        <li>Documentation and record-keeping requirements</li>
        <li>Environmental impact assessments</li>
        <li>Worker safety and training protocols</li>
      </ul>

      <h2>Future Outlook: What's Next for Tanzania's Water Treatment Industry</h2>
      <p>Looking ahead to 2025-2030, several trends will shape the industry:</p>

      <h3>Artificial Intelligence Integration</h3>
      <p>AI-powered optimization algorithms will revolutionize system efficiency, potentially reducing energy consumption by 30-40% while improving water quality consistency.</p>

      <h3>Decentralized Treatment Systems</h3>
      <p>Smaller, modular systems will enable distributed treatment, reducing infrastructure costs and improving reliability.</p>

      <h3>Circular Water Economy</h3>
      <p>Advanced treatment and reuse technologies will enable closed-loop water systems, minimizing fresh water consumption and wastewater discharge.</p>

      <h2>Implementation Strategies for Businesses</h2>
      <p>For Tanzanian businesses considering water treatment upgrades, we recommend a phased approach:</p>

      <ol>
        <li><strong>Assessment Phase:</strong> Comprehensive water analysis and needs evaluation</li>
        <li><strong>Design Phase:</strong> Custom system design with future expansion capability</li>
        <li><strong>Implementation Phase:</strong> Professional installation with minimal operational disruption</li>
        <li><strong>Optimization Phase:</strong> Performance monitoring and continuous improvement</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of water treatment in Tanzania is bright, driven by technological innovation, regulatory advancement, and growing environmental awareness. Businesses that invest in modern, sustainable water treatment solutions today will be well-positioned to meet tomorrow's challenges while achieving operational excellence.</p>

      <p>At IDS Water Tech, we're committed to staying at the forefront of these developments, bringing world-class water treatment solutions to East Africa. Our comprehensive approach combines proven technologies with innovative solutions, ensuring our clients achieve optimal water quality while maximizing return on investment.</p>

      <p>For businesses ready to upgrade their water treatment systems or explore new installations, our team of experts is available for consultation. Together, we can build a sustainable water future for Tanzania.</p>
    `,
    image: ownerEquipment,
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Industry Insights",
    author: "Dr. James Mwenda",
    authorRole: "Technical Director",
    tags: ["Water Treatment", "Technology", "Sustainability", "Tanzania", "Industrial", "Innovation"]
  };

  const relatedPosts = [
    {
      title: "Industrial Water Treatment Best Practices",
      image: equipment1,
      date: "March 10, 2024",
      category: "Technical Guide"
    },
    {
      title: "Reverse Osmosis Technology Guide",
      image: equipment2,
      date: "March 5, 2024",
      category: "Technology"
    }
  ];

  const handleShare = async (platform: string) => {
    setIsSharing(true);
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          toast({
            title: "Link copied!",
            description: "Blog post link has been copied to clipboard.",
          });
        } catch (err) {
          toast({
            title: "Failed to copy",
            description: "Please copy the link manually.",
            variant: "destructive",
          });
        }
        setIsSharing(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setIsSharing(false);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Badge className="bg-primary text-primary-foreground">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="text-foreground leading-relaxed"
                  />
                </article>
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mt-8 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{post.author}</h4>
                        <p className="text-primary text-sm">{post.authorRole}</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Leading water treatment innovations across East Africa with over 15 years of experience in industrial and commercial applications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Share Buttons */}
                  <Card className="bg-gradient-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share This Post
                      </h4>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => handleShare("facebook")}
                          disabled={isSharing}
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => handleShare("twitter")}
                          disabled={isSharing}
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => handleShare("linkedin")}
                          disabled={isSharing}
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => handleShare("copy")}
                          disabled={isSharing}
                        >
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Copy Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Table of Contents */}
                  <Card className="bg-gradient-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Table of Contents
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#introduction" className="text-muted-foreground hover:text-primary">Introduction</a></li>
                        <li><a href="#current-landscape" className="text-muted-foreground hover:text-primary">Current Landscape</a></li>
                        <li><a href="#emerging-technologies" className="text-muted-foreground hover:text-primary">Emerging Technologies</a></li>
                        <li><a href="#industry-applications" className="text-muted-foreground hover:text-primary">Industry Applications</a></li>
                        <li><a href="#sustainability" className="text-muted-foreground hover:text-primary">Sustainability</a></li>
                        <li><a href="#future-outlook" className="text-muted-foreground hover:text-primary">Future Outlook</a></li>
                        <li><a href="#conclusion" className="text-muted-foreground hover:text-primary">Conclusion</a></li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{relatedPost.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Water Treatment Solutions?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert consultation for your specific water treatment requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;