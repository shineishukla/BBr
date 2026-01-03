
export interface AdventureData {
  title: string;
  slug: string;
  desc: string;
  ytId: string;
  map: string;
  bgImage: string;
  stats: {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    static?: boolean;
  }[];
  highlights: string[];
}

export const adventuresData: Record<string, AdventureData> = {
  'gaar-til-kroatien': {
    title: "GÅR TIL KROATIEN",
    slug: "gaar-til-kroatien",
    desc: "3001 km til fods fra Odense til Zagreb. En mental og fysisk rejse gennem Europa.",
    ytId: "dQw4w9WgXcQ",
    map: "https://picsum.photos/seed/map-croatia/800/600",
    bgImage: "https://picsum.photos/seed/croatia-bg/1200/800",
    stats: [
      { label: "KM", value: 3001 },
      { label: "DAGE", value: 75 },
      { label: "KM/DAG", value: 40 },
      { label: "SKRIDT/DAG", value: 47680 },
      { label: "VIEWS", value: 7.6, suffix: "M", decimals: 1 }
    ],
    highlights: ["Odense-Zagreb ruten", "Ingen penge medbragt", "Overnatning i det fri", "7.6 millioner visninger"]
  },
  'cykler-til-sahara': {
    title: "CYKLER TIL SAHARA",
    slug: "cykler-til-sahara",
    desc: "4442 km på cykel fra Jylland til Marokko. Fra dansk sommer til Saharas bagende sol.",
    ytId: "dQw4w9WgXcQ",
    map: "https://picsum.photos/seed/map-sahara/800/600",
    bgImage: "https://picsum.photos/seed/sahara-bg/1200/800",
    stats: [
      { label: "KM", value: 4442 },
      { label: "DAGE", value: 36 },
      { label: "KM/DAG", value: 123.4, decimals: 1 },
      { label: "HØJDEMETER", value: 31499 },
      { label: "VIEWS", value: 25.4, suffix: "M", decimals: 1 }
    ],
    highlights: ["Gennem 7 lande", "Atlasbjergene krydset", "Gennemsnit på 123km/dag", "25 millioner visninger"]
  },
  'island-pa-tvaers': {
    title: "ISLAND PÅ TVÆRS",
    slug: "island-pa-tvaers",
    desc: "En ekstrem ekspedition i -22 graders kulde gennem Islands ufremkommelige højland.",
    ytId: "dQw4w9WgXcQ",
    map: "https://picsum.photos/seed/map-iceland/800/600",
    bgImage: "https://picsum.photos/seed/iceland-bg/1200/800",
    stats: [
      { label: "KM", value: 400, prefix: "132/" },
      { label: "DAGE", value: 4 },
      { label: "KM/DAG", value: 44 },
      { label: "TEMP", value: -22, suffix: "°C", static: true },
      { label: "VIEWS", value: 5.4, suffix: "M", decimals: 1 }
    ],
    highlights: ["Islands højland", "Vandring i sne", "-22 graders frost", "Pulk og teltlejr"]
  }
};
