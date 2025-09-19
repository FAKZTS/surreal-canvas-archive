import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroArtwork}
          alt="Arte surrealista digital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-coral rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gold rounded-full opacity-80 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-coral rounded-full opacity-70 animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="reveal">
          <h1 
            className="text-6xl md:text-8xl font-display font-bold mb-6 text-white glitch"
            data-text="Dimensões Oníricas"
          >
            Dimensões Oníricas
          </h1>
        </div>
        
        <div className="reveal reveal-delay-1">
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Uma jornada através dos limites da realidade, onde arte e sonho se encontram 
            em manifestações digitais impossíveis
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-coral hover:bg-coral-muted text-white px-8 py-6 text-lg glow-primary">
              <Link to="/galeria">
                <Sparkles className="mr-2 h-5 w-5" />
                Explorar Obras
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-6 text-lg">
              <Link to="/sobre">
                Sobre o Projeto
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-3 absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Explore</span>
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};