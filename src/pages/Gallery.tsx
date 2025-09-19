import { ArtworkCard } from "@/components/ArtworkCard";
import { artworks } from "@/data/artworks";

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient">
            Coleção Permanente
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seis obras cuidadosamente curadas que exploram as fronteiras entre realidade e imaginação, 
            cada uma uma janela para dimensões inexploradas da consciência artística contemporânea.
          </p>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={`reveal reveal-delay-${(index % 3) + 1}`}>
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>

        {/* Gallery Info */}
        <div className="mt-20 text-center reveal">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold mb-4 text-coral">
              Sobre Esta Coleção
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta coleção representa uma nova fronteira na arte digital experimental, onde algoritmos 
              generativos se encontram com visões surrealistas para criar experiências visuais únicas. 
              Cada obra foi desenvolvida através de processos colaborativos entre artistas e inteligência 
              artificial, resultando em composições que transcendem limitações técnicas tradicionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;