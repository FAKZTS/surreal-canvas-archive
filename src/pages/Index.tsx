import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Info } from "lucide-react";
import { artworks } from "@/data/artworks";

const Index = () => {
  // Featured artworks (first 3)
  const featuredArtworks = artworks.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Featured Collection Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gradient">
              Obras em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Uma seleção de composições que desafiam percepções e expandem horizontes artísticos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredArtworks.map((artwork, index) => (
              <div key={artwork.id} className={`reveal reveal-delay-${index + 1}`}>
                <ArtworkCard {...artwork} />
              </div>
            ))}
          </div>

          <div className="text-center reveal reveal-delay-3">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-muted text-black px-8 py-6 text-lg glow-secondary">
              <Link to="/galeria">
                <Sparkles className="mr-2 h-5 w-5" />
                Ver Coleção Completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
                Arte Além dos Limites
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A Galeria Surrealista é um espaço experimental dedicado à exploração de novas 
                fronteiras artísticas através da colaboração entre criatividade humana e 
                inteligência artificial. Cada obra representa uma investigação única sobre 
                percepção, realidade e imaginação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
                  <Link to="/sobre">
                    <Info className="mr-2 h-4 w-4" />
                    Sobre o Projeto
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                  <Link to="/artistas">
                    <Users className="mr-2 h-4 w-4" />
                    Conhecer Artistas
                  </Link>
                </Button>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-display font-semibold mb-3 text-coral">
                  Exposição Virtual
                </h3>
                <p className="text-muted-foreground mb-4">
                  Experimente arte digital em um ambiente imersivo que transcende 
                  limitações físicas tradicionais.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gold">6</div>
                    <div className="text-sm text-muted-foreground">Obras</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-coral">6</div>
                    <div className="text-sm text-muted-foreground">Artistas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-deep-purple">∞</div>
                    <div className="text-sm text-muted-foreground">Possibilidades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
