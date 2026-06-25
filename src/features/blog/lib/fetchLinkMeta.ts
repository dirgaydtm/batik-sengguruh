import he from "he";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface BloggerLink {
  rel: string;
  href: string;
}

interface BloggerEntry {
  id?: { $t: string };
  title?: { $t: string };
  published?: { $t: string };
  summary?: { $t: string };
  content?: { $t: string };
  link?: BloggerLink[];
  media$thumbnail?: { url: string };
}

export async function fetchBlogPosts(feedUrl: string, maxPosts: number): Promise<BlogPost[]> {
  try {
    const finalUrl = `${feedUrl}&max-results=${maxPosts}`;
    const res = await fetch(finalUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error("Failed to fetch feed, status:", res.status);
      return [];
    }

    const data = await res.json();
    const entries = data.feed?.entry ?? [];

    return entries.map((entry: BloggerEntry) => {
      const link = entry.link?.find((l: BloggerLink) => l.rel === "alternate")?.href ?? "";
      const dateRaw = entry.published?.$t ?? new Date().toISOString();
      const date = new Date(dateRaw);
      const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
      const formattedDate = `${months[date.getMonth()]} ${date.getFullYear()}`;

      // ambil thumbnail
      let imageUrl = entry.media$thumbnail?.url ?? "";

      // fallback thumbnail from content if media$thumbnail is missing
      if (!imageUrl && entry.content && entry.content.$t) {
        const imgMatch = entry.content.$t.match(/<img[^>]+src="([^">]+)"/i);
        if (imgMatch) imageUrl = imgMatch[1];
      }

      // Pastikan gambar yang diambil adalah resolusi tinggi (s1600)
      if (imageUrl) {
        // Handle format lama: /s72-c/ -> /s1600/
        imageUrl = imageUrl.replace(/\/s[0-9]+(-[a-zA-Z0-9\-]+)?\//, "/s1600/");
        // Handle format baru: =w320-h240-rw -> =s1600
        imageUrl = imageUrl.replace(/=[wsdh][0-9]+(-[wsdh][0-9]+)*(-[a-zA-Z0-9\-]+)*/, "=s1600");
      }

      let rawText = entry.summary?.$t || entry.content?.$t || "";
      rawText = rawText.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const decodedText = he.decode(rawText);
      const description = decodedText.length > 0 ? `${decodedText.substring(0, 150)}...` : "";

      return {
        id: entry.id?.$t ?? link,
        title: entry.title?.$t ?? "Artikel",
        date: formattedDate,
        description,
        imageUrl,
        link,
      };
    });
  } catch (e) {
    console.error("Error fetching blog posts:", e);
    return [];
  }
}
