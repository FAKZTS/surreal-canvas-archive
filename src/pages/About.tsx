import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Sparkles, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Sobre o Projeto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma exploração experimental nas fronteiras entre arte, tecnologia e consciência
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Vision */}
            <div className="reveal">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-coral mr-4" />
                  <h2 className="text-2xl font-display font-semibold text-coral">
                    Nossa Visão
                  </h2>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  A Galeria Surrealista nasceu da convicção de que a arte digital representa 
                  uma nova fronteira na expressão humana. Não somos apenas uma galeria - somos 
                  um laboratório de experimentação onde artistas e algoritmos colaboram para 
                  criar experiências visuais impossíveis no mundo físico.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada obra em nossa coleção questiona as fronteiras entre realidade e imaginação, 
                  entre o humano e o computacional, entre o possível e o impossível.
                </p>
              </div>
            </div>

            {/* Concept */}
            <div className="reveal reveal-delay-1">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 text-gold mr-4" />
                  <h2 className="text-2xl font-display font-semibold text-gold">
                    Conceito Surrealista
                  </h2>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Inspirados pelo movimento surrealista do século XX, aplicamos seus princípios 
                  fundamentais ao contexto digital contemporâneo. André Breton definiu surrealismo 
                  como "automatismo psíquico puro" - nós exploramos o automatismo algorítmico 
                  como ferramenta de descoberta artística.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos artistas trabalham em estados de "sonho acordado digital", onde a 
                  inteligência artificial funciona como extensão do inconsciente criativo, 
                  revelando imagens que existem além dos limites da percepção ordinária.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="reveal reveal-delay-2">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-deep-purple mr-4" />
                  <h2 className="text-2xl font-display font-semibold text-deep-purple">
                    Processo Experimental
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-coral mb-3">Curadoria Algorítmica</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Cada obra passa por um processo de seleção que combina critérios 
                      estéticos humanos com análise computacional de complexidade visual 
                      e impacto emocional.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold mb-3">Síntese Criativa</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Artistas colaboram com sistemas de IA em iterações múltiplas, 
                      refinando visões iniciais através de feedback contínuo entre 
                      intuição humana e computação.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-purple mb-3">Documentação Poética</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Cada obra é acompanhada de textos curatoriais que exploram suas 
                      dimensões conceituais, técnicas e filosóficas, criando narrativas 
                      que amplificam a experiência visual.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-coral mb-3">Experiência Imersiva</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      O ambiente digital permite interações impossíveis em galerias 
                      físicas, incluindo animações sutis, efeitos de luz e navegação 
                      intuitiva que amplifica o impacto de cada composição.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manifesto */}
            <div className="reveal reveal-delay-3">
              <div className="glass rounded-2xl p-8 border border-coral/30">
                <h2 className="text-2xl font-display font-semibold mb-6 text-center text-gradient">
                  Manifesto Digital
                </h2>
                <blockquote className="text-center text-lg leading-relaxed italic text-foreground mb-6">
                  "A realidade é apenas o ponto de partida. 
                  A arte digital nos permite navegar territórios impossíveis, 
                  onde lógica e sonho coexistem em harmonia generativa."
                </blockquote>
                <p className="text-muted-foreground text-center text-sm">
                  — Curadoria Coletiva, Galeria Surrealista
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center reveal reveal-delay-3">
              <Button asChild size="lg" className="bg-coral hover:bg-coral-muted text-white px-8 py-6 text-lg glow-primary">
                <Link to="/galeria">
                  <Eye className="mr-2 h-5 w-5" />
                  Explorar a Coleção
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;