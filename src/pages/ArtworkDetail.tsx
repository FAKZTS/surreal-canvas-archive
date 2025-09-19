import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Volume2, Eye } from "lucide-react";
import { artworks, artists } from "@/data/artworks";
import { toast } from "sonner";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find(work => work.id === id);
  
  if (!artwork) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Obra não encontrada</h1>
          <Button asChild>
            <Link to="/galeria">Voltar à Galeria</Link>
          </Button>
        </div>
      </div>
    );
  }

  const artist = artists.find(a => a.artworks.includes(artwork.id));

  const handleDownload = () => {
    toast.success("Ficha da obra preparada para download");
  };

  const handleAudioCuration = () => {
    toast.info("Recurso de áudio em desenvolvimento");
  };

  const handleExpandView = () => {
    toast.info("Visualização expandida em desenvolvimento");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Back button */}
        <div className="mb-8 reveal">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-coral">
            <Link to="/galeria">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar à Galeria
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Artwork Image */}
          <div className="reveal">
            <div className="glass rounded-2xl overflow-hidden border border-border/20 glow-primary">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 mt-6">
              <Button onClick={handleExpandView} variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Expandir
              </Button>
              <Button onClick={handleAudioCuration} variant="outline" size="sm">
                <Volume2 className="mr-2 h-4 w-4" />
                Curadoria em Áudio
              </Button>
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Baixar Ficha
              </Button>
            </div>
          </div>

          {/* Artwork Details */}
          <div className="reveal reveal-delay-1">
            <div className="space-y-8">
              {/* Title and basic info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
                  {artwork.title}
                </h1>
                <div className="text-xl text-gold font-medium mb-2">
                  {artist?.name} • {artwork.year}
                </div>
                <p className="text-muted-foreground">
                  {artwork.technique} • {artwork.dimensions}
                </p>
              </div>

              {/* Short description */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-display font-semibold mb-3 text-coral">
                  Sobre a Obra
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Detailed description */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-display font-semibold mb-3 text-coral">
                  Análise Curatorial
                </h2>
                <p className="text-foreground leading-relaxed">
                  {artwork.longDescription}
                </p>
              </div>

              {/* Artist info */}
              {artist && (
                <div className="glass rounded-xl p-6">
                  <h2 className="text-xl font-display font-semibold mb-3 text-coral">
                    Sobre o Artista
                  </h2>
                  <h3 className="text-lg font-medium mb-2 text-gold">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {artist.nationality} • {artist.birthYear}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {artist.bio}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/artista/${artist.id}`}>
                        Ver mais obras do artista
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;