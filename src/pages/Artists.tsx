import { Navigation } from "@/components/Navigation";
import { artists } from "@/data/artworks";

const Artists = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Artistas Colaboradores
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça os visionários que expandem fronteiras artísticas através da 
              experimentação digital e colaboração com inteligência artificial.
            </p>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div key={artist.id} className={`reveal reveal-delay-${(index % 3) + 1}`}>
                <div className="glass rounded-xl p-6 hover:border-coral/50 transition-all duration-300 artwork-card">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-coral to-gold rounded-full flex items-center justify-center text-white text-2xl font-display font-bold">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 text-gradient">
                      {artist.name}
                    </h3>
                    <p className="text-gold text-sm">
                      {artist.nationality} • {artist.birthYear}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {artist.bio}
                  </p>
                  
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">
                      {artist.artworks.length} obra{artist.artworks.length > 1 ? 's' : ''} na coleção
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Info */}
          <div className="mt-20 reveal">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-semibold mb-4 text-coral">
                Processo Colaborativo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cada artista desenvolve suas obras através de um processo único de colaboração 
                com sistemas de inteligência artificial, explorando territórios inexplorados 
                da criatividade digital. O resultado são composições que transcendem limitações 
                técnicas tradicionais e abrem novos caminhos para a expressão artística contemporânea.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl mb-2">🧠</div>
                  <h3 className="font-semibold text-gold mb-2">Visão Humana</h3>
                  <p className="text-sm text-muted-foreground">
                    Conceitos, emoções e narrativas únicas de cada artista
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">🤖</div>
                  <h3 className="font-semibold text-coral mb-2">IA Generativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Algoritmos avançados que expandem possibilidades criativas
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="font-semibold text-deep-purple mb-2">Síntese Criativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Obras únicas que combinam intuição e computação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;