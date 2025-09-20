import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Import testimonial images
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";
import testimonial10 from "@/assets/testimonial-10.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Factory Manager",
      company: "Tanzania Foods Ltd",
      image: testimonial1,
      rating: 5,
      text: "IDS Water Tech transformed our production with their advanced filtration system. Water quality improved dramatically!"
    },
    {
      name: "John Mwalimu", 
      role: "Operations Director",
      company: "East Africa Beverages",
      image: testimonial2,
      rating: 5,
      text: "Outstanding service and professional installation. Their team delivered exactly what we needed for our facility."
    },
    {
      name: "Fatuma Kidaha",
      role: "Plant Supervisor", 
      company: "Kilimanjaro Processing",
      image: testimonial3,
      rating: 5,
      text: "Reliable water treatment solutions that keep our operations running smoothly. Highly recommend their services!"
    },
    {
      name: "Samuel Moshi",
      role: "Maintenance Chief",
      company: "Industrial Solutions TZ",
      image: testimonial4,
      rating: 5,
      text: "Professional team with excellent technical knowledge. Their maintenance service keeps our systems performing perfectly."
    },
    {
      name: "Dr. Rehema Juma",
      role: "Hospital Administrator",
      company: "Muhimbili Medical Center",
      image: testimonial5,
      rating: 5,
      text: "Clean, safe water is critical for healthcare. IDS Water Tech ensures our facility meets the highest standards."
    },
    {
      name: "Hassan Mohamed",
      role: "CEO",
      company: "Coastal Industries",
      image: testimonial6,
      rating: 5,
      text: "Invested in their reverse osmosis system - best decision for our business. Quality and efficiency exceeded expectations."
    },
    {
      name: "Grace Kimani",
      role: "Project Engineer",
      company: "Infrastructure Development",
      image: testimonial7,
      rating: 5,
      text: "From consultation to installation, every step was handled professionally. Their expertise is unmatched in Tanzania."
    },
    {
      name: "Ibrahim Ally",
      role: "Restaurant Owner",
      company: "Safari Cuisine",
      image: testimonial8,
      rating: 5,
      text: "Pure water is essential for our kitchen. Their compact system fits perfectly and delivers consistently clean water."
    },
    {
      name: "Dr. Mary Ndege",
      role: "Medical Director",
      company: "Arusha General Hospital",
      image: testimonial9,
      rating: 5,
      text: "Reliable water purification for our medical facility. IDS Water Tech understands healthcare industry requirements."
    },
    {
      name: "David Kihiyo",
      role: "IT Manager",
      company: "Tech Solutions TZ",
      image: testimonial10,
      rating: 5,
      text: "Modern technology meets practical solutions. Their systems integrate seamlessly with our facility operations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 slide-in-up">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-up delay-200">
            Trusted by leading businesses across Tanzania for reliable water treatment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-normal hover:-translate-y-2 slide-in-up delay-${(index % 3 + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;