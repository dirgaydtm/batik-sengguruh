export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

export async function fetchLinkMeta(urls: string[]): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
        },
      });
      if (!res.ok) {
        posts.push({
          id: url,
          title: "Artikel Tidak Ditemukan",
          date: "Update Terbaru",
          description: "Mohon periksa kembali tautan yang dimasukkan di asset-data.ts",
          imageUrl: "",
          link: url,
        });
        continue;
      }

      const html = await res.text();

      // Extract Title
      const titleMatch =
        html.match(/<meta property="og:title" content="([^"]+)"/i) ||
        html.match(/<title>([^<]+)<\/title>/i);
      let title = titleMatch ? titleMatch[1] : "Artikel Batik Sengguruh";
      // Clean up common blogger title suffixes
      title = title.replace(" - Griya Batik Seng - Sengguruh Malang", "").trim();

      // Extract Description
      let description = "Kunjungi artikel ini untuk membaca selengkapnya mengenai aktivitas dan informasi seputar Griya Batik Sengguruh.";
      
      const pMatches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      if (pMatches) {
        for (const p of pMatches) {
          let text = p.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          // Skip navigation links or empty paragraphs
          if (text.length > 30 && !text.includes("Menu Home Profil")) {
            description = text.substring(0, 150) + (text.length > 150 ? "..." : "");
            break;
          }
        }
      }

      // Extract Image
      let imageUrl = "";
      const imgMatch = html.match(/<img[^>]+src="([^">]+)"/i);
      if (imgMatch) {
        imageUrl = imgMatch[1];
      }

      // Extract Date from Blogger URL format (e.g. /2024/01/...)
      let date = "";
      const dateMatch = url.match(/\/(\d{4})\/(\d{2})\//);
      if (dateMatch) {
        const year = dateMatch[1];
        const month = parseInt(dateMatch[2], 10);
        const months = [
          "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
          "Jul", "Agt", "Sep", "Okt", "Nov", "Des"
        ];
        date = `${months[month - 1]} ${year}`;
      }

      posts.push({
        id: url,
        title,
        date,
        description,
        imageUrl,
        link: url,
      });
    } catch (e) {
      console.error(`Failed to fetch metadata for ${url}`, e);
    }
  }

  return posts;
}
