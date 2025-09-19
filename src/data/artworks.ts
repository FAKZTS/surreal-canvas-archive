import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  technique: string;
  dimensions: string;
  imageUrl: string;
  description: string;
  longDescription: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Tempo Líquido",
    artist: "Maya Celestina",
    year: 2024,
    technique: "Arte Digital Generativa",
    dimensions: "1024 × 1024 pixels",
    imageUrl: artwork1,
    description: "Mecanismos de relógio derretendo em âmbar líquido, uma reflexão sobre a natureza fluida do tempo.",
    longDescription: "Em 'Tempo Líquido', Celestina explora a percepção temporal através da metamorfose de elementos mecânicos precisos em formas orgânicas e fluidas. A obra questiona nossa relação com o tempo linear, sugerindo que a temporalidade é mais maleável do que nossa consciência ordinária permite perceber. Os engrenages dourados suspensos em âmbar eterno criam uma tensão visual entre o movimento perpétuo e a estagnação absoluta."
  },
  {
    id: "2", 
    title: "Arquiteturas Impossíveis",
    artist: "Lorenzo Ethereal",
    year: 2024,
    technique: "Composição Digital Surrealista",
    dimensions: "1024 × 1024 pixels",
    imageUrl: artwork2,
    description: "Ilhas flutuantes de coral com instrumentos musicais crescendo como vegetação orgânica.",
    longDescription: "Lorenzo Ethereal constrói paisagens que desafiam as leis da física e da lógica. Nesta composição, instrumentos de sopro vintage brotam como flora exuberante em ilhas suspensas no éter. A obra sugere que a música possui uma força vital própria, capaz de criar novos mundos e realidades. As nuvens coral-rosa funcionam como portais entre dimensões, onde som e matéria se fundem em harmonia impossível."
  },
  {
    id: "3",
    title: "Oceano Cristalino",
    artist: "Sophia Luminar",
    year: 2024,
    technique: "Arte Conceitual Digital",
    dimensions: "1024 × 1024 pixels", 
    imageUrl: artwork3,
    description: "Borboletas cristalinas emergindo de ondas oceânicas sob constelações púrpuras.",
    longDescription: "Sophia Luminar cria uma poética visual onde elementos da natureza transcendem sua forma material. As borboletas cristalinas representam a transformação e a fragilidade da beleza, emergindo das profundezas oceânicas como metáfora do inconsciente coletivo. As constelações púrpuras mapeiam navegações interiores, enquanto o mercúrio líquido reflete não apenas luz, mas também memórias e sonhos submersos."
  },
  {
    id: "4",
    title: "Cosmos Interior",
    artist: "Rafael Nebulae",
    year: 2024,
    technique: "Arte Digital Contemplativa",
    dimensions: "1024 × 1024 pixels",
    imageUrl: artwork4,
    description: "Silhueta humana preenchida com nebulosa cósmica, galhos dourados crescendo através da figura.",
    longDescription: "Rafael Nebulae investiga a conexão fundamental entre microcosmo e macrocosmo. A figura humana torna-se um portal para o infinito, revelando que carregamos universos inteiros dentro de nós. Os galhos dourados que atravessam a forma humana simbolizam o crescimento espiritual e a interconexão de toda vida. A luz coral que emana da composição sugere que somos, simultaneamente, observadores e criadores do cosmos."
  },
  {
    id: "5",
    title: "Paradoxos Estruturais", 
    artist: "Elena Dimensia",
    year: 2024,
    technique: "Arquitetura Digital Impossível",
    dimensions: "1024 × 1024 pixels",
    imageUrl: artwork5,
    description: "Escadarias flutuantes e cascatas de cromo líquido em espaços arquitetônicos impossíveis.",
    longDescription: "Elena Dimensia constrói espaços que existem apenas na interseção entre imaginação e geometria. Inspirada por Escher e Dalí, ela cria arquiteturas que se dobram sobre si mesmas, desafiando nossa percepção espacial. As cascatas de cromo líquido fluem contra a gravidade, enquanto as escadarias conduzem a destinos que são simultaneamente origem e fim. A obra convida à contemplação sobre a natureza ilusória da realidade construída."
  },
  {
    id: "6",
    title: "Bosque Translúcido",
    artist: "Aria Phantasma",
    year: 2024,
    technique: "Paisagem Digital Onírica",
    dimensions: "1024 × 1024 pixels",
    imageUrl: artwork6,
    description: "Floresta de árvores de cristal com folhas coral, esferas transparentes contendo mundos miniatura.",
    longDescription: "Aria Phantasma cultiva jardins impossíveis onde a transparência revela camadas múltiplas de realidade. Cada árvore cristalina é simultaneamente reflexo e refração de luz, memória e possibilidade. As esferas flutuantes funcionam como lentes para outros mundos, sugerindo que a realidade é fractal - infinitamente complexa em qualquer escala de observação. O crepúsculo púrpura banha a cena em melancolia contemplativa, criando um ambiente propício à introspecção e ao devaneio."
  }
];

export const artists = [
  {
    id: "maya-celestina",
    name: "Maya Celestina",
    bio: "Artista digital especializada em explorar a temporalidade através de composições generativas. Sua obra investiga as intersecções entre tecnologia e percepção humana do tempo.",
    birthYear: 1989,
    nationality: "Brasileira",
    artworks: ["1"]
  },
  {
    id: "lorenzo-ethereal", 
    name: "Lorenzo Ethereal",
    bio: "Criador de mundos impossíveis que combinam elementos arquitetônicos com formas orgânicas. Seus trabalhos questionam os limites entre o construído e o natural.",
    birthYear: 1992,
    nationality: "Italiana",
    artworks: ["2"]
  },
  {
    id: "sophia-luminar",
    name: "Sophia Luminar", 
    bio: "Artista conceitual que trabalha com simbolismo natural e transformação. Suas obras exploram metamorfose e transcendência através da arte digital.",
    birthYear: 1987,
    nationality: "Portuguesa",
    artworks: ["3"]
  },
  {
    id: "rafael-nebulae",
    name: "Rafael Nebulae",
    bio: "Explorador do cosmos interior humano, criando obras que conectam astronomia com introspecção. Combina ciência e espiritualidade em composições contemplativas.",
    birthYear: 1990,
    nationality: "Mexicana", 
    artworks: ["4"]
  },
  {
    id: "elena-dimensia",
    name: "Elena Dimensia",
    bio: "Arquiteta digital que constrói espaços impossíveis inspirados em paradoxos geométricos. Sua obra desafia percepções espaciais convencionais.",
    birthYear: 1985,
    nationality: "Russa",
    artworks: ["5"]
  },
  {
    id: "aria-phantasma",
    name: "Aria Phantasma",
    bio: "Cultivadora de paisagens oníricas que exploram múltiplas camadas de realidade. Trabalha com transparência e reflexão como metáforas visuais.",
    birthYear: 1993,
    nationality: "Japonesa",
    artworks: ["6"]
  }
];