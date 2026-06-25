"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/shared/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface BlogCardsProps {
  posts: BlogPost[];
  seeMoreLink?: string;
}

export function BlogCards({
  posts,
  seeMoreLink = "https://www.batiksengguruh.com/",
}: BlogCardsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col w-full max-w-5xl relative z-10 px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full mb-12">
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full group"
            >
              <Card className="h-full bg-transparent p-0 ring-0">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full aspect-video bg-[#E5E5E5] rounded-2xl overflow-hidden relative mb-5">
                    {post.imageUrl ? (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#A8A8A8] text-sm">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Date */}
                  <p className="text-xs text-[#A8A8A8] mb-2">{post.date}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#2B223D] mb-3 group-hover:text-[#B4805A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#786C68] text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Link
          href={seeMoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2B223D] font-bold text-sm hover:text-[#B4805A] transition-colors flex items-center gap-1"
        >
          Baca Lainnya <span className="text-[#B4805A]">›</span>
        </Link>
      </div>
    </div>
  );
}
