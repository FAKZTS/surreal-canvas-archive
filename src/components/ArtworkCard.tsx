import { Link } from "react-router-dom";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  year: number;
  technique: string;
  imageUrl: string;
  description: string;
}

export const ArtworkCard = ({ 
  id, 
  title, 
  artist, 
  year, 
  technique, 
  imageUrl, 
  description 
}: ArtworkCardProps) => {
  return (
    <Link to={`/obra/${id}`} className="group block">
      <div className="artwork-card glass rounded-xl overflow-hidden border border-border/20 hover:border-coral/50">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover overlay with artwork info */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl font-display font-semibold text-white mb-2">
              {title}
            </h3>
            <p className="text-gold text-sm font-medium mb-1">
              {artist} • {year}
            </p>
            <p className="text-gray-300 text-sm mb-3">
              {technique}
            </p>
            <p className="text-gray-200 text-sm line-clamp-3">
              {description}
            </p>
          </div>
        </div>
        
        {/* Card info always visible */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-coral transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {artist} • {year}
          </p>
        </div>
      </div>
    </Link>
  );
};