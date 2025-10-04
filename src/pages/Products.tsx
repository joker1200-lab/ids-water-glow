import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Package, Wrench, ShoppingCart, Eye, CheckCircle, Droplets, Waves, Cylinder, CircuitBoard, Zap } from "lucide-react";
import LazyImage from "@/components/LazyImage";

// Import product images
import filterHousing1 from "@/assets/filter-housing-1.jpg";
import filterHousing2 from "@/assets/filter-housing-2.jpg";
import filterHousing3 from "@/assets/filter-housing-3.jpg";
import membraneVessel1 from "@/assets/membrane-vessel-1.jpg";
import membraneVessel2 from "@/assets/membrane-vessel-2.jpg";
import membraneVessel3 from "@/assets/membrane-vessel-3.jpg";
import roMembrane1 from "@/assets/ro-membrane-1.jpg";
import roMembrane2 from "@/assets/ro-membrane-2.jpg";
import roMembrane3 from "@/assets/ro-membrane-3.jpg";
import roMembrane4 from "@/assets/ro-membrane-4.jpg";
import roMembrane5 from "@/assets/ro-membrane-5.jpg";
import roMembrane6 from "@/assets/ro-membrane-6.jpg";
import roMembrane7 from "@/assets/ro-membrane-7.jpg";
import roMembrane8 from "@/assets/ro-membrane-8.jpg";
import roMembrane9 from "@/assets/ro-membrane-9.jpg";
import roMembrane10 from "@/assets/ro-membrane-10.jpg";
import roMembrane11 from "@/assets/ro-membrane-11.jpg";
import membraneAccessories1 from "@/assets/membrane-accessories-1.jpg";
import filterSystem1 from "@/assets/filter-system-1.jpg";
import filterSystem2 from "@/assets/filter-system-2.jpg";
import filterSystem3 from "@/assets/filter-system-3.jpg";
import filterSystem4 from "@/assets/filter-system-4.jpg";
import filterSystem5 from "@/assets/filter-system-5.jpg";
import filterSystem6 from "@/assets/filter-system-6.jpg";
import filterSystem7 from "@/assets/filter-system-7.jpg";
import filterSystem8 from "@/assets/filter-system-8.jpg";
import filterSystem9 from "@/assets/filter-system-9.jpg";
import filterSystem10 from "@/assets/filter-system-10.jpg";
import filterSystem11 from "@/assets/filter-system-11.jpg";
import filterSystem12 from "@/assets/filter-system-12.jpg";
import filterCartridge1 from "@/assets/filter-cartridge-1.jpg";
import filterCartridge2 from "@/assets/filter-cartridge-2.jpg";
import filterCartridge3 from "@/assets/filter-cartridge-3.jpg";
import filterCartridge4 from "@/assets/filter-cartridge-5.jpg";
import filterCartridge6 from "@/assets/filter-cartridge-6.jpg";
import filterCartridge7 from "@/assets/filter-cartridge-7.jpg";
import filterCartridge8 from "@/assets/filter-cartridge-8.jpg";
import filterCartridge10 from "@/assets/filter-cartridge-10.jpg";
import filterCartridge11 from "@/assets/filter-cartridge-11.jpg";
import filterCartridge12 from "@/assets/filter-cartridge-12.jpg";
import specialtyCartridge1 from "@/assets/specialty-cartridge-1.jpg";
import specialtyCartridge2 from "@/assets/specialty-cartridge-2.jpg";
import specialtyCartridge3 from "@/assets/specialty-cartridge-3.jpg";
import specialtyCartridge4 from "@/assets/specialty-cartridge-4.jpg";
import specialtyCartridge5 from "@/assets/specialty-cartridge-5.jpg";
import specialtyCartridge6 from "@/assets/specialty-cartridge-6.jpg";
import dosingPump1 from "@/assets/dosing-pump-1.jpg";
import dosingPump2 from "@/assets/dosing-pump-2.jpg";
import dosingPump3 from "@/assets/dosing-pump-3.jpg";
import dosingPump4 from "@/assets/dosing-pump-4.jpg";
import dosingPump5 from "@/assets/dosing-pump-5.jpg";
import dosingPump6 from "@/assets/dosing-pump-6.jpg";
import dosingPump7 from "@/assets/dosing-pump-7.jpg";
import dosingPump8 from "@/assets/dosing-pump-8.jpg";
import dosingPump9 from "@/assets/dosing-pump-9.jpg";
import dosingPump10 from "@/assets/dosing-pump-10.jpg";
import dosingPump11 from "@/assets/dosing-pump-11.jpg";
import dosingPump12 from "@/assets/dosing-pump-12.jpg";
import dosingPump13 from "@/assets/dosing-pump-13.jpg";
import dosingPump14 from "@/assets/dosing-pump-14.jpg";
import dosingPump15 from "@/assets/dosing-pump-15.jpg";
import dosingPump16 from "@/assets/dosing-pump-16.jpg";
import solenoidValve1 from "@/assets/solenoid-valve-1.jpg";
import solenoidValve2 from "@/assets/solenoid-valve-2.jpg";
import solenoidValve3 from "@/assets/solenoid-valve-3.jpg";
import solenoidValve4 from "@/assets/solenoid-valve-4.jpg";
import solenoidValve5 from "@/assets/solenoid-valve-5.jpg";
import solenoidValve6 from "@/assets/solenoid-valve-6.jpg";
import solenoidValve7 from "@/assets/solenoid-valve-7.jpg";
import solenoidValve8 from "@/assets/solenoid-valve-8.jpg";
import ppFilterCartridge1 from "@/assets/pp-filter-cartridge-1.jpg";
import ppFilterCartridge2 from "@/assets/pp-filter-cartridge-2.jpg";
import ppFilterCartridge3 from "@/assets/pp-filter-cartridge-3.jpg";
import ppFilterCartridge4 from "@/assets/pp-filter-cartridge-4.jpg";
import ppFilterCartridge5 from "@/assets/pp-filter-cartridge-5.jpg";
import ppFilterCartridge6 from "@/assets/pp-filter-cartridge-6.jpg";
import ppFilterCartridge7 from "@/assets/pp-filter-cartridge-7.jpg";
import ppFilterCartridge8 from "@/assets/pp-filter-cartridge-8.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productCategories = [
    {
      id: "solenoid-valves",
      name: "Solenoid Valves",
      icon: Zap,
      description: "Professional FROTEC solenoid valves for precise flow control and automation",
      products: [
        {
          id: "sv-brass-actuated",
          name: "Brass Actuated Solenoid Valve",
          image: solenoidValve1,
          description: "Heavy-duty brass solenoid valve with red wire actuator for water treatment systems",
          features: ["Brass construction", "High pressure rating", "Fast response time", "Corrosion resistant"],
          specifications: ["Material: Brass body", "Voltage: 24V AC/DC", "Pressure: 0-16 bar", "Temperature: -10°C to +80°C"]
        },
        {
          id: "sv-digital-control",
          name: "Digital Control Solenoid Valve",
          image: solenoidValve2,
          description: "Advanced digital control solenoid valve with LCD display for precise automation",
          features: ["Digital LCD display", "Precise control", "Programmable settings", "Energy efficient"],
          specifications: ["Digital controller", "24V DC power", "Flow rate: 0-50 L/min", "IP65 protection"]
        },
        {
          id: "sv-compact-brass",
          name: "Compact Brass Valve",
          image: solenoidValve3,
          description: "Compact brass solenoid valve for space-constrained installations",
          features: ["Compact design", "Space saving", "Quick installation", "Reliable operation"],
          specifications: ["Compact size", "1/2\" - 2\" connections", "Manual override", "NSF certified"]
        },
        {
          id: "sv-threaded-brass",
          name: "Threaded Brass Solenoid Valve",
          image: solenoidValve4,
          description: "Threaded brass solenoid valve with wire leads for easy electrical connection",
          features: ["Threaded connections", "Easy wiring", "Brass construction", "Standard voltage"],
          specifications: ["BSP/NPT threads", "110V/220V options", "Normally closed", "Manual operation available"]
        },
        {
          id: "sv-flanged-brass",
          name: "Flanged Brass Solenoid Valve",
          image: solenoidValve5,
          description: "Flanged brass solenoid valve for high-flow industrial applications",
          features: ["Flanged connections", "High flow rate", "Industrial grade", "Durable construction"],
          specifications: ["Flanged ends", "DN25-DN100", "PN16 rating", "Industrial applications"]
        },
        {
          id: "sv-2ws1-series",
          name: "2WS1 Series Solenoid Valve",
          image: solenoidValve6,
          description: "2WS1 series brass solenoid valve with specification label for water and oil applications",
          features: ["Series 2WS1 design", "Water/oil compatible", "Specification labeled", "Quality assured"],
          specifications: ["Type: 2WS1-15", "Orifice: 15mm", "Pressure: 0-1.0MPa", "Medium: Water/Air/Oil"]
        },
        {
          id: "sv-professional-grade",
          name: "Professional Grade Solenoid Valve",
          image: solenoidValve7,
          description: "Professional grade brass solenoid valve with enhanced sealing and reliability",
          features: ["Professional grade", "Enhanced sealing", "Long service life", "Field serviceable"],
          specifications: ["Professional quality", "Enhanced O-rings", "Field replaceable coil", "5-year warranty"]
        },
        {
          id: "sv-2ws1-20",
          name: "2WS1-20 Heavy Duty Valve",
          image: solenoidValve8,
          description: "Heavy-duty 2WS1-20 solenoid valve with 20mm orifice for high-flow applications",
          features: ["20mm orifice", "Heavy-duty construction", "High flow capacity", "Industrial rated"],
          specifications: ["Type: 2WS1-20", "Orifice: 20mm", "Pressure: 0-1.0MPa", "Flow rate: Up to 100 L/min"]
        }
      ]
    },
    {
      id: "filter-housings",
      name: "Filter Housings",
      icon: Filter,
      description: "High-quality filter housings for various water treatment applications",
      products: [
        {
          id: "fh-404",
          name: "404 Filter Housing",
          image: filterHousing1,
          description: "Durable 404 series filter housing with pressure relief valve",
          features: ["Pressure relief valve", "Easy maintenance", "Corrosion resistant", "Multiple inlet/outlet options"],
          specifications: ["Material: Food grade plastic", "Max Pressure: 150 PSI", "Temperature: 40-100°F", "Thread: 1/4\" NPT"]
        },
        {
          id: "fh-4040",
          name: "4040 Filter Housing",
          image: filterHousing2,
          description: "Heavy-duty 4040 series filter housing for industrial applications",
          features: ["Heavy-duty construction", "High flow rate", "Easy cartridge replacement", "Leak-proof design"],
          specifications: ["Material: High-grade polymer", "Max Pressure: 200 PSI", "Temperature: 35-105°F", "Thread: 3/8\" NPT"]
        },
        {
          id: "fh-standard",
          name: "Standard Filter Housing",
          image: filterHousing3,
          description: "Standard filter housing suitable for residential and light commercial use",
          features: ["Cost-effective", "Easy installation", "Standard fittings", "Reliable performance"],
          specifications: ["Material: ABS plastic", "Max Pressure: 125 PSI", "Temperature: 40-95°F", "Thread: 1/4\" NPT"]
        }
      ]
    },
    {
      id: "membrane-vessels",
      name: "RO Membrane Vessels",
      icon: Package,
      description: "Professional-grade reverse osmosis membrane vessels and components",
      products: [
        {
          id: "mv-frotec-4040",
          name: "FROTEC 4040 Membrane Vessel",
          image: membraneVessel1,
          description: "Professional FROTEC 4040 membrane vessel with complete component kit",
          features: ["Complete component kit", "High-quality seals", "Easy assembly", "Professional grade"],
          specifications: ["Length: 40 inches", "Diameter: 4 inches", "Max Pressure: 300 PSI", "Material: FRP composite"]
        },
        {
          id: "mv-frotec-standard",
          name: "FROTEC Standard Vessel",
          image: membraneVessel2,
          description: "Standard FROTEC membrane vessel with essential components",
          features: ["Essential components included", "Durable construction", "Standard fittings", "Proven reliability"],
          specifications: ["Length: 32 inches", "Diameter: 4 inches", "Max Pressure: 250 PSI", "Material: FRP composite"]
        },
        {
          id: "mv-complete-kit",
          name: "Complete Membrane Kit",
          image: membraneVessel3,
          description: "Complete membrane vessel kit with all accessories and components",
          features: ["All accessories included", "Installation hardware", "O-rings and seals", "Comprehensive kit"],
          specifications: ["Vessel + Components", "Multiple O-ring sizes", "Installation guide", "1-year warranty"]
        }
      ]
    },
    {
      id: "ro-membranes",
      name: "RO Membranes",
      icon: Droplets,
      description: "High-performance FROTEC reverse osmosis membranes for superior water purification",
      products: [
        {
          id: "ro-frotec-4040",
          name: "FROTEC 4040 RO Membrane",
          image: roMembrane1,
          description: "Premium FROTEC 4040 reverse osmosis membrane with excellent salt rejection",
          features: ["99.5% salt rejection", "High flow rate", "Low pressure drop", "Extended lifespan"],
          specifications: ["Size: 40\" x 4\"", "Max Pressure: 600 PSI", "Max Temperature: 113°F", "pH Range: 2-11"]
        },
        {
          id: "ro-frotec-bundle",
          name: "FROTEC Membrane Bundle",
          image: roMembrane2,
          description: "Complete bundle of FROTEC RO membranes for industrial applications",
          features: ["Bulk packaging", "Consistent quality", "Cost-effective", "Industrial grade"],
          specifications: ["Multiple sizes available", "Factory sealed", "2-year shelf life", "NSF certified"]
        },
        {
          id: "ro-frotec-cross-section",
          name: "FROTEC Spiral Wound Membrane",
          image: roMembrane3,
          description: "Advanced spiral wound design for maximum surface area and efficiency",
          features: ["Spiral wound technology", "Maximum surface area", "Superior performance", "Easy installation"],
          specifications: ["Spiral wound design", "Polyamide thin film", "High permeate flow", "Low energy consumption"]
        },
        {
          id: "ro-frotec-multi-pack",
          name: "FROTEC Multi-Pack Set",
          image: roMembrane4,
          description: "Professional multi-pack set for commercial water treatment systems",
          features: ["Multiple membranes", "Professional grade", "Optimized spacing", "Complete system"],
          specifications: ["4-membrane configuration", "Uniform flow distribution", "Commercial grade", "Installation guide"]
        },
        {
          id: "ro-frotec-boxed",
          name: "FROTEC Boxed Membrane",
          image: roMembrane5,
          description: "Factory-sealed FROTEC membrane with original packaging and documentation",
          features: ["Factory sealed", "Original packaging", "Quality certificate", "Warranty included"],
          specifications: ["Original FROTEC box", "Documentation included", "Serial numbered", "Quality guaranteed"]
        },
        {
          id: "ro-frotec-standard",
          name: "FROTEC Standard Membrane",
          image: roMembrane6,
          description: "Standard FROTEC RO membrane for residential and light commercial use",
          features: ["Standard configuration", "Reliable performance", "Cost effective", "Easy replacement"],
          specifications: ["Standard dimensions", "Residential/light commercial", "Easy installation", "1-year warranty"]
        },
        {
          id: "ro-frotec-bulk-stack",
          name: "FROTEC Bulk Stack (5-Pack)",
          image: roMembrane7,
          description: "Bulk stack of 5 FROTEC membranes for high-capacity installations",
          features: ["5-membrane stack", "Bulk pricing", "High capacity", "Industrial applications"],
          specifications: ["5 membranes included", "Consistent performance", "Volume discount", "Commercial grade"]
        },
        {
          id: "ro-frotec-premium-boxed",
          name: "FROTEC Premium Boxed Membrane",
          image: roMembrane8,
          description: "Premium FROTEC membrane with enhanced packaging and certification",
          features: ["Premium grade", "Enhanced packaging", "Quality certificate", "Extended warranty"],
          specifications: ["Premium grade material", "Enhanced specifications", "Quality documentation", "2-year warranty"]
        },
        {
          id: "ro-membrane-end-caps",
          name: "RO Membrane End Caps Set",
          image: roMembrane9,
          description: "Professional end caps showing membrane internal structure and flow paths",
          features: ["Internal structure visible", "Educational value", "Professional grade", "Quality construction"],
          specifications: ["End cap assembly", "Flow path design", "Professional quality", "Demonstration model"]
        },
        {
          id: "ro-residential-pack",
          name: "Residential RO Membrane 3-Pack",
          image: roMembrane10,
          description: "Three residential RO membranes in protective packaging for home systems",
          features: ["3-pack value", "Residential grade", "Protective packaging", "Home systems"],
          specifications: ["75/100/150 GPD options", "Residential applications", "1-year warranty", "Easy installation"]
        },
        {
          id: "ro-residential-single",
          name: "Residential RO Membrane (Single)",
          image: roMembrane11,
          description: "Single residential RO membrane in protective packaging for home use",
          features: ["Single unit", "Residential grade", "Protective packaging", "Home compatible"],
          specifications: ["75 GPD standard", "Home systems", "6-month warranty", "Quick installation"]
        }
      ]
    },
    {
      id: "filter-systems",
      name: "Water Filter Systems",
      icon: Waves,
      description: "Complete FROTEC water filter systems for residential, commercial, and industrial applications",
      products: [
        {
          id: "fs-single-stage",
          name: "Single Stage Filter System",
          image: filterSystem1,
          description: "Complete single-stage blue water filter system for basic filtration needs",
          features: ["Single stage filtration", "Blue housing design", "Easy installation", "Pressure relief valve"],
          specifications: ["Flow rate: 5 GPM", "Max pressure: 125 PSI", "Filter size: 10\"", "1\" inlet/outlet"]
        },
        {
          id: "fs-single-bracket",
          name: "Single Stage with Bracket",
          image: filterSystem2,
          description: "Single-stage filter system with mounting bracket for secure installation",
          features: ["Mounting bracket included", "Secure installation", "Easy maintenance", "Durable construction"],
          specifications: ["Includes mounting bracket", "Wall mount compatible", "10\" filter capacity", "Standard connections"]
        },
        {
          id: "fs-multi-size",
          name: "Multi-Size Filter Collection",
          image: filterSystem3,
          description: "Complete collection of different sized FROTEC filter systems for various applications",
          features: ["Multiple sizes included", "Versatile applications", "Professional grade", "Complete kit"],
          specifications: ["6 different sizes", "10\"-20\" capacities", "Various flow rates", "Professional installation"]
        },
        {
          id: "fs-triple-stage",
          name: "Triple Stage Filter System",
          image: filterSystem4,
          description: "Advanced triple-stage filtration system for comprehensive water treatment",
          features: ["3-stage filtration", "Progressive filtering", "High capacity", "Professional grade"],
          specifications: ["3 filter stages", "15 GPM flow rate", "Multi-stage processing", "Commercial applications"]
        },
        {
          id: "fs-clear-blue-combo",
          name: "Clear & Blue Filter Combo",
          image: filterSystem5,
          description: "Combination of clear and blue filter housings for specialized filtration",
          features: ["Clear housing visibility", "Blue housing durability", "Dual configuration", "Versatile setup"],
          specifications: ["Clear + blue housings", "Visual monitoring", "10\" standard size", "Flexible installation"]
        },
        {
          id: "fs-heavy-duty-pair",
          name: "Heavy Duty Filter Pair",
          image: filterSystem6,
          description: "Pair of heavy-duty blue filter systems for high-demand applications",
          features: ["Heavy-duty construction", "Dual system setup", "High flow capacity", "Industrial grade"],
          specifications: ["2 filter systems", "Heavy-duty design", "High pressure rated", "Industrial applications"]
        },
        {
          id: "fs-professional-bracket",
          name: "Professional Filter with Bracket",
          image: filterSystem7,
          description: "Professional blue filter system with advanced mounting bracket design",
          features: ["Professional grade", "Advanced bracket", "Pressure relief", "Easy access"],
          specifications: ["Professional mounting", "Pressure gauge port", "Quick release", "20\" filter capacity"]
        },
        {
          id: "fs-compact-separable",
          name: "Compact Separable Filter",
          image: filterSystem8,
          description: "Compact blue filter with separable design for easy maintenance",
          features: ["Separable design", "Compact size", "Easy maintenance", "Space saving"],
          specifications: ["Separable housing", "10\" standard", "Quick disconnect", "Residential use"]
        },
        {
          id: "fs-multi-variant-collection",
          name: "Multi-Variant Filter Collection",
          image: filterSystem9,
          description: "Complete collection of various FROTEC filter variants for different applications",
          features: ["Multiple variants", "Complete collection", "Various sizes", "Professional set"],
          specifications: ["6 different variants", "Clear and blue options", "Various capacities", "Complete kit"]
        },
        {
          id: "fs-threaded-blue",
          name: "Threaded Blue Filter System",
          image: filterSystem10,
          description: "Blue filter system with threaded design for secure connection",
          features: ["Threaded connections", "Secure fitting", "Blue housing", "Standard size"],
          specifications: ["Threaded design", "10\" standard", "NPT connections", "Residential/commercial"]
        },
        {
          id: "fs-dual-clear-blue",
          name: "Dual Clear & Blue System",
          image: filterSystem11,
          description: "Dual system with clear and blue filters for specialized filtration needs",
          features: ["Clear visibility", "Blue durability", "Dual filtration", "Specialized setup"],
          specifications: ["Clear + blue combo", "10\" capacity each", "Dual mounting", "Visual monitoring"]
        },
        {
          id: "fs-triple-stage-advanced",
          name: "Triple Stage Advanced System",
          image: filterSystem12,
          description: "Advanced triple-stage filtration system with clear and blue housings",
          features: ["3-stage filtration", "Mixed housing types", "Advanced setup", "Professional grade"],
          specifications: ["3 filter stages", "Clear + blue housings", "Progressive filtration", "Commercial grade"]
        }
      ]
    },
    {
      id: "pp-filter-cartridges",
      name: "PP Filter Cartridges",
      icon: Cylinder,
      description: "High-quality polypropylene sediment filter cartridges for water treatment systems",
      products: [
        {
          id: "pp-wound-cartridge-1",
          name: "PP Wound Filter Cartridge",
          image: ppFilterCartridge1,
          description: "Polypropylene wound filter cartridge with black O-rings for sediment filtration",
          features: ["PP wound construction", "Black O-ring seals", "High dirt holding capacity", "Multiple micron ratings"],
          specifications: ["Material: Polypropylene", "Length: 10\"-40\" available", "Micron: 1-50 μm", "Temperature: Up to 60°C"]
        },
        {
          id: "pp-mixed-cartridges",
          name: "PP Mixed Filter Set",
          image: ppFilterCartridge2,
          description: "Assorted PP filter cartridges including wound and pleated types",
          features: ["Multiple filter types", "Wound and pleated options", "Various configurations", "Professional set"],
          specifications: ["Mixed types", "10\" standard length", "Various micron ratings", "Industrial grade"]
        },
        {
          id: "pp-sediment-filter",
          name: "PP Sediment Filter 5 Micron",
          image: ppFilterCartridge3,
          description: "5 micron PP sediment filter cartridge for removing dirt and rust particles",
          features: ["5 micron rating", "Sediment removal", "High flow rate", "Long service life"],
          specifications: ["Filtration: 5 micron", "Material: Polypropylene", "Length: 10\"", "For water use only"]
        },
        {
          id: "pp-spun-cartridge",
          name: "PP Spun Thin Type Filter",
          image: ppFilterCartridge4,
          description: "PP spun thin type filter cartridge for fine sediment filtration",
          features: ["Spun construction", "Thin design", "High efficiency", "Cost effective"],
          specifications: ["Spun polypropylene", "Thin type design", "Standard dimensions", "Multiple micron options"]
        },
        {
          id: "pp-multi-cartridge-set",
          name: "PP Multi-Cartridge Set",
          image: ppFilterCartridge5,
          description: "Multiple PP filter cartridges with different end cap configurations",
          features: ["Multiple cartridges", "Various end caps", "Professional grade", "Complete set"],
          specifications: ["Set of multiple filters", "Different configurations", "Standard lengths", "Industrial applications"]
        },
        {
          id: "pp-foam-cartridge",
          name: "PP Foam Filter Cartridge",
          image: ppFilterCartridge6,
          description: "PP foam filter cartridge for coarse to fine particle removal",
          features: ["Foam construction", "High porosity", "Excellent flow rate", "Reusable design"],
          specifications: ["Foam polypropylene", "10\" length", "Multiple densities", "Washable"]
        },
        {
          id: "pp-standard-cartridge",
          name: "PP Standard Filter Cartridge",
          image: ppFilterCartridge7,
          description: "Standard PP filter cartridge for general water filtration applications",
          features: ["Standard design", "Reliable performance", "Easy installation", "Wide compatibility"],
          specifications: ["Standard PP", "10\" x 2.5\"", "Universal fit", "Food grade material"]
        },
        {
          id: "pp-short-cartridge-set",
          name: "PP Short Filter Cartridge Set",
          image: ppFilterCartridge8,
          description: "Short PP filter cartridges for compact filtration systems",
          features: ["Compact design", "Space saving", "Multiple units", "High efficiency"],
          specifications: ["Short length design", "Compact systems", "Set of 4", "Various micron ratings"]
        }
      ]
    },
    {
      id: "specialty-cartridges",
      name: "Specialty Filter Cartridges",
      icon: CircuitBoard,
      description: "Advanced specialty membrane filter cartridges for critical filtration applications",
      products: [
        {
          id: "sc-nylon-specialty",
          name: "Specialty N66 Nylon Cartridges",
          image: specialtyCartridge1,
          description: "Specialty N66 nylon membrane cartridges designed for critical applications",
          features: ["Specialty N66 membrane", "Critical applications", "High purity", "Advanced design"],
          specifications: ["Material: Specialty N66", "10\" length", "0.1-0.2μm", "Critical grade"]
        },
        {
          id: "sc-flat-mouth-advanced",
          name: "Advanced Flat Mouth Cartridges",
          image: specialtyCartridge2,
          description: "Advanced flat mouth pleated cartridges for specialized mounting systems",
          features: ["Advanced flat mouth", "Specialized mounting", "High efficiency", "Custom design"],
          specifications: ["Flat mouth design", "Advanced pleating", "Custom mounting", "High efficiency"]
        },
        {
          id: "sc-microporous-insert",
          name: "Microporous Insert Cartridges",
          image: specialtyCartridge3,
          description: "Microporous pleated cartridges with insert-style design for precise filtration",
          features: ["Microporous membrane", "Insert design", "Precise filtration", "Multiple sizes"],
          specifications: ["Insert-style design", "Microporous structure", "Various lengths", "Precision filtration"]
        },
        {
          id: "sc-microporous-single",
          name: "Single Microporous Cartridge",
          image: specialtyCartridge4,
          description: "Individual microporous pleated cartridge for specialized applications",
          features: ["Individual unit", "Microporous design", "Specialized use", "High precision"],
          specifications: ["Single cartridge", "Microporous membrane", "10\" standard", "Precision applications"]
        },
        {
          id: "sc-mce-premium",
          name: "Premium MCE Cartridges",
          image: specialtyCartridge5,
          description: "Premium mixed cellulose ester cartridges for high-end applications",
          features: ["Premium MCE", "High-end applications", "Superior performance", "Quality assured"],
          specifications: ["Premium MCE membrane", "High-end grade", "Superior quality", "Assured performance"]
        },
        {
          id: "sc-ptfe-advanced",
          name: "Advanced PTFE Filter Set",
          image: specialtyCartridge6,
          description: "Advanced PTFE membrane cartridge set for extreme chemical resistance",
          features: ["Advanced PTFE", "Extreme resistance", "Chemical compatibility", "Professional set"],
          specifications: ["Advanced PTFE membrane", "Chemical resistant", "Multiple configurations", "Professional grade"]
        }
      ]
    },
    {
      id: "dosing-pumps",
      name: "Dosing Pumps",
      icon: Zap,
      description: "Precision chemical dosing pumps for water treatment and chemical injection systems",
      products: [
        {
          id: "dp-basic-green",
          name: "Basic Green Dosing Pump",
          image: dosingPump1,
          description: "Reliable basic dosing pump with cable connection for chemical injection",
          features: ["Basic operation", "Cable connection", "Reliable performance", "Chemical resistant"],
          specifications: ["Flow rate: 0.5-10 L/h", "Pressure: 7 bar", "Power: 230V", "Chemical resistant head"]
        },
        {
          id: "dp-digital-display",
          name: "Digital Display Dosing Pump",
          image: dosingPump2,
          description: "Advanced dosing pump with digital display and precise control functions",
          features: ["Digital display", "Precise control", "Multiple functions", "User friendly"],
          specifications: ["Digital controls", "Flow adjustment", "Timer functions", "Alarm system"]
        },
        {
          id: "dp-pump-head",
          name: "Dosing Pump Head Unit",
          image: dosingPump3,
          description: "Replacement pump head unit showing internal mechanism and connections",
          features: ["Pump head unit", "Internal mechanism", "Easy replacement", "Quality construction"],
          specifications: ["Pump head only", "Standard connections", "Chemical compatible", "Service part"]
        },
        {
          id: "dp-compact-digital",
          name: "Compact Digital Pump",
          image: dosingPump4,
          description: "Compact dosing pump with digital interface and space-saving design",
          features: ["Compact design", "Digital interface", "Space saving", "Efficient operation"],
          specifications: ["Compact size", "Digital controls", "230V operation", "Wall mountable"]
        },
        {
          id: "dp-advanced-control",
          name: "Advanced Control Pump",
          image: dosingPump5,
          description: "Advanced dosing pump with comprehensive control panel and monitoring",
          features: ["Advanced controls", "Monitoring system", "Professional grade", "Comprehensive interface"],
          specifications: ["Advanced controls", "Flow monitoring", "Alarm functions", "Data logging"]
        },
        {
          id: "dp-accessory-kit",
          name: "Dosing Pump with Accessories",
          image: dosingPump6,
          description: "Complete dosing pump kit with accessories and connection fittings",
          features: ["Complete kit", "Accessories included", "Connection fittings", "Ready to install"],
          specifications: ["Pump + accessories", "Installation kit", "Various fittings", "Complete system"]
        },
        {
          id: "dp-professional-grade",
          name: "Professional Grade Pump",
          image: dosingPump7,
          description: "Professional-grade dosing pump with advanced control and monitoring features",
          features: ["Professional grade", "Advanced monitoring", "High precision", "Industrial use"],
          specifications: ["Professional quality", "High precision", "Advanced features", "Industrial grade"]
        },
        {
          id: "dp-frotec-blue",
          name: "FROTEC Blue Dosing Pump",
          image: dosingPump8,
          description: "FROTEC branded blue dosing pump with professional control system",
          features: ["FROTEC brand", "Professional controls", "Blue design", "Quality assurance"],
          specifications: ["FROTEC quality", "Professional grade", "Advanced controls", "Brand warranty"]
        },
        {
          id: "dp-frotec-compact-blue",
          name: "FROTEC Compact Blue Pump",
          image: dosingPump9,
          description: "Compact FROTEC blue dosing pump with white pump head and manual control",
          features: ["Compact FROTEC design", "White pump head", "Manual control dial", "Reliable operation"],
          specifications: ["Compact design", "Manual controls", "Chemical resistant head", "FROTEC brand"]
        },
        {
          id: "dp-frotec-analog-control",
          name: "FROTEC Analog Control Pump",
          image: dosingPump10,
          description: "FROTEC dosing pump with analog control dial and professional pump head",
          features: ["Analog control dial", "Professional head", "FROTEC quality", "Precise adjustment"],
          specifications: ["Analog controls", "Professional grade", "Precise flow control", "FROTEC warranty"]
        },
        {
          id: "dp-frotec-protective-cover",
          name: "FROTEC Pump with Protective Cover",
          image: dosingPump11,
          description: "FROTEC dosing pump with transparent protective cover for enhanced safety",
          features: ["Protective cover", "Enhanced safety", "Transparent design", "Professional grade"],
          specifications: ["Safety cover", "Transparent protection", "Professional controls", "Enhanced safety"]
        },
        {
          id: "dp-frotec-side-mount",
          name: "FROTEC Side Mount Pump",
          image: dosingPump12,
          description: "FROTEC dosing pump with side-mounted pump head for versatile installation",
          features: ["Side mount design", "Versatile installation", "FROTEC quality", "Professional grade"],
          specifications: ["Side mount head", "Versatile mounting", "Professional controls", "FROTEC brand"]
        },
        {
          id: "dp-frotec-standard-mount",
          name: "FROTEC Standard Mount Pump",
          image: dosingPump13,
          description: "FROTEC standard mount dosing pump with reliable control system",
          features: ["Standard mounting", "Reliable controls", "FROTEC quality", "Professional design"],
          specifications: ["Standard mount", "Reliable operation", "Professional controls", "FROTEC warranty"]
        },
        {
          id: "dp-frotec-lcd-display",
          name: "FROTEC LCD Display Pump",
          image: dosingPump14,
          description: "Advanced FROTEC dosing pump with LCD display and digital controls",
          features: ["LCD display", "Digital controls", "Advanced features", "FROTEC quality"],
          specifications: ["LCD display", "Digital interface", "Advanced programming", "FROTEC professional"]
        },
        {
          id: "dp-frotec-wall-mount",
          name: "FROTEC Wall Mount Pump",
          image: dosingPump15,
          description: "FROTEC wall-mounted dosing pump with side pump head configuration",
          features: ["Wall mount design", "Side pump head", "Space efficient", "FROTEC quality"],
          specifications: ["Wall mounting", "Side configuration", "Space saving", "FROTEC brand"]
        },
        {
          id: "dp-frotec-digital-premium",
          name: "FROTEC Digital Premium Pump",
          image: dosingPump16,
          description: "Premium FROTEC dosing pump with digital display and advanced control features",
          features: ["Premium digital", "Advanced controls", "LED indicators", "Top-tier quality"],
          specifications: ["Digital display", "Premium features", "LED indicators", "FROTEC premium"]
        }
      ]
    },
    {
      id: "filter-cartridges",
      name: "Membrane Filter Cartridges",
      icon: Cylinder,
      description: "High-performance membrane filter cartridges for precise filtration applications",
      products: [
        {
          id: "fc-mce-pleated",
          name: "MCE Pleated Filter Cartridge",
          image: filterCartridge1,
          description: "10-inch mixed cellulose ester (MCE) pleated filter cartridge for fine filtration",
          features: ["MCE membrane", "Pleated design", "High surface area", "Excellent flow rate"],
          specifications: ["Material: Mixed Cellulose Ester", "Size: 10 inches", "Pore size: 0.22-0.45μm", "Temperature: 80°C max"]
        },
        {
          id: "fc-ptfe-assorted",
          name: "PTFE Filter Cartridge Set",
          image: filterCartridge2,
          description: "Assorted PTFE (polytetrafluoroethylene) filter cartridges for chemical resistance",
          features: ["PTFE membrane", "Chemical resistant", "Multiple sizes", "Professional grade"],
          specifications: ["Material: PTFE", "Various sizes", "Chemical resistant", "High temperature rated"]
        },
        {
          id: "fc-ptfe-collection",
          name: "PTFE Cartridge Collection",
          image: filterCartridge3,
          description: "Complete collection of PTFE filter cartridges in various sizes for industrial use",
          features: ["Complete collection", "Multiple lengths", "PTFE construction", "Industrial applications"],
          specifications: ["10\"-40\" lengths", "PTFE membrane", "Industrial grade", "High capacity"]
        },
        {
          id: "fc-pes-assorted",
          name: "PES Assorted Filter Set",
          image: filterCartridge4,
          description: "Assorted PES membrane filter cartridges in various sizes for different applications",
          features: ["Multiple sizes", "PES membrane", "Versatile applications", "Professional set"],
          specifications: ["Various lengths", "PES construction", "Multiple pore sizes", "Pharmaceutical grade"]
        },
        {
          id: "fc-wound-string",
          name: "Wound String Filter Cartridge",
          image: filterCartridge6,
          description: "Traditional wound string filter cartridge for sediment and particle removal",
          features: ["Wound string design", "Sediment filtration", "Cost effective", "Easy replacement"],
          specifications: ["String wound", "10\" standard", "5-50μm options", "Polypropylene core"]
        },
        {
          id: "fc-nylon-n66",
          name: "N66 Nylon Membrane Cartridges",
          image: filterCartridge7,
          description: "High-performance N66 nylon membrane filter cartridges for demanding applications",
          features: ["N66 nylon membrane", "High performance", "Chemical resistance", "Multiple sizes"],
          specifications: ["Material: Nylon 66", "10\" standard", "0.1-0.45μm", "Chemical resistant"]
        },
        {
          id: "fc-nylon-compact",
          name: "Compact Nylon Filter Set",
          image: filterCartridge8,
          description: "Compact set of nylon membrane filter cartridges for space-efficient installations",
          features: ["Compact design", "Nylon membrane", "Space efficient", "Easy installation"],
          specifications: ["Compact size", "Nylon construction", "Standard connections", "Set of 3"]
        },
        {
          id: "fc-acf-packaged",
          name: "ACF Packaged Filter Cartridge",
          image: filterCartridge10,
          description: "Activated carbon fiber (ACF) filter cartridge in protective packaging",
          features: ["Activated carbon fiber", "Protective packaging", "Odor removal", "Chemical adsorption"],
          specifications: ["ACF membrane", "Vacuum sealed", "10\" standard", "High adsorption capacity"]
        },
        {
          id: "fc-acf-multi-set",
          name: "ACF Multi-Size Filter Set",
          image: filterCartridge11,
          description: "Multiple activated carbon fiber filter cartridges in various sizes",
          features: ["Multiple sizes", "ACF technology", "Odor control", "Chemical removal"],
          specifications: ["Various lengths", "ACF construction", "High capacity", "Professional set"]
        },
        {
          id: "fc-acf-professional",
          name: "Professional ACF Filter",
          image: filterCartridge12,
          description: "Professional-grade activated carbon fiber filter in protective packaging",
          features: ["Professional grade", "Factory sealed", "High capacity", "Premium quality"],
          specifications: ["Professional ACF", "Factory packaging", "20\" length", "Industrial grade"]
        }
      ]
    },
    {
      id: "accessories",
      name: "Components & Accessories",
      icon: Wrench,
      description: "Essential components and accessories for water treatment systems",
      products: [
        {
          id: "acc-orings",
          name: "O-Ring Set",
          image: membraneVessel1,
          description: "Complete set of O-rings for membrane vessels and filter housings",
          features: ["Multiple sizes", "Food grade material", "High durability", "Universal compatibility"],
          specifications: ["Material: EPDM rubber", "Temperature range: -40°F to 250°F", "Set of 20 pieces", "Various sizes"]
        },
        {
          id: "acc-endcaps",
          name: "End Cap Assembly",
          image: membraneVessel2,
          description: "Precision-engineered end cap assembly for membrane vessels",
          features: ["Precision fit", "Leak-proof design", "Easy installation", "Long-lasting"],
          specifications: ["Material: Stainless steel", "Thread: Standard NPT", "Pressure rated", "Corrosion resistant"]
        },
        {
          id: "acc-brackets",
          name: "Mounting Brackets",
          image: membraneVessel3,
          description: "Heavy-duty mounting brackets for secure vessel installation",
          features: ["Heavy-duty construction", "Secure mounting", "Adjustable design", "Corrosion resistant"],
          specifications: ["Material: Galvanized steel", "Adjustable width", "Wall/floor mount", "Hardware included"]
        },
        {
          id: "acc-membrane-assembly-kit",
          name: "Complete Membrane Assembly Kit",
          image: membraneAccessories1,
          description: "Complete FROTEC membrane vessel assembly kit with all components",
          features: ["Complete assembly kit", "All components included", "Professional installation", "Quality hardware"],
          specifications: ["FROTEC vessel included", "End caps and seals", "Mounting hardware", "Installation manual"]
        }
      ]
    }
  ];

  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({ ...product, category: category.id, categoryName: category.name }))
  );

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Professional-grade water treatment components and systems designed for reliability, 
            performance, and long-lasting operation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              International Quality Standards
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Quality Guaranteed
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              Fast Shipping
            </Badge>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-11 mb-12">
              <TabsTrigger value="all" className="text-sm">All Products</TabsTrigger>
              <TabsTrigger value="solenoid-valves" className="text-sm">Solenoid Valves</TabsTrigger>
              <TabsTrigger value="filter-housings" className="text-sm">Filter Housings</TabsTrigger>
              <TabsTrigger value="membrane-vessels" className="text-sm">RO Vessels</TabsTrigger>
              <TabsTrigger value="ro-membranes" className="text-sm">RO Membranes</TabsTrigger>
              <TabsTrigger value="filter-systems" className="text-sm">Filter Systems</TabsTrigger>
              <TabsTrigger value="pp-filter-cartridges" className="text-sm">PP Cartridges</TabsTrigger>
              <TabsTrigger value="filter-cartridges" className="text-sm">Membrane Cartridges</TabsTrigger>
              <TabsTrigger value="specialty-cartridges" className="text-sm">Specialty Cartridges</TabsTrigger>
              <TabsTrigger value="dosing-pumps" className="text-sm">Dosing Pumps</TabsTrigger>
              <TabsTrigger value="accessories" className="text-sm">Accessories</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {productCategories.map((category) => (
                <div key={category.id} className="space-y-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product) => (
                      <ProductCard key={product.id} product={{ ...product, categoryName: category.name }} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={{ ...product, categoryName: category.name }} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Our team can provide custom 
            water treatment solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    features: string[];
    specifications: string[];
    categoryName: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="group hover:shadow-elegant transition-all duration-normal overflow-hidden">
      <div className="relative overflow-hidden">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-normal"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {product.categoryName}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {showDetails && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Specifications:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                {product.specifications.map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            {showDetails ? "Hide Details" : "View Details"}
          </Button>
          <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-primary-dark">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;
