"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const pressItems = [
  {
    id: 1,
    title: "Løvens Hule Junior - Akademia (Episode 10)",
    publication: "DRDK",
    date: "May 22, 2023",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQFrIeX1zeVobg/feedshare-shrink_2048_1536/B4DZUkjb_oG4Ao-/0/1740075025958?e=1743638400&v=beta&t=DUJ78pczzgxj9N5o5S9_AJNEs3VWwIDzacjbHhOqKPQ",
    link: "https://www.dr.dk/drtv/serie/loevens-hule-junior_479046",
    type: "press",
  },
  {
    id: 2,
    title: "Ung forsker nåede til tops igen (Mentioned)",
    publication: "Sjællandske Nyhedder",
    date: "24. April 2024",
    image:
      "https://smooth-storage.aptoma.no/users/sndk/images/105164211.jpg?t[quality]=100&t[resize][width]=970&t[resize][height]=645&accessToken=5a11f02202a5b69bdc3d91af3804ac7c34a6e9e7be7a90b800d9a4b9cb5695e5",
    link: "https://www.sn.dk/art245862/roskilde-kommune/uddannelse/ung-forsker-naaede-til-tops-igen/#:~:text=Hj%C3%A6lp%20til%20at,B%C3%B8rne%2D%20og%20Undervisningsministeriet.",
    type: "press",
  },
];

const awards = [
  {
    id: 4,
    title: "1st place winner of the Junior Technology Category",
    organization: "Astra Unge Forskere",
    date: "2024",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQHKOPkkcg_ogw/feedshare-shrink_1280/feedshare-shrink_1280/0/1714164350562?e=1743638400&v=beta&t=hcalH-9D9POmwvNPZOHG6VsRZSrEXJ9dqqbpabfEnaU",
    link: "https://ungeforskere.dk/finalist/forbedret-opgave-og-noteplatform-til-undervisning/",
    type: "award",
  },
];

const allItems = [...pressItems, ...awards].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function PressAndRecognitionShowcase() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-medium text-zinc-500 tracking-widest uppercase">
          Press & Recognition
        </h2>
        <Button variant="link" asChild className="p-0 h-auto font-semibold">
          <Link href="/press-kit" className="flex items-center gap-1">
            <span className="animate-underline">Press Kit</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {allItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            className="group flex flex-row fitems-center gap-6 cursor-pointer"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 w-auto">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={
                  "publication" in item ? item.publication : item.organization
                }
                width={100}
                height={100}
                className="rounded-lg object-cover w-[100px] h-[100px]"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold group-hover:text-zinc-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-600 mt-1">
                {item.type === "press" ? (
                  <>
                    <Newspaper className="inline-block w-4 h-4 mr-1" />
                    {"publication" in item
                      ? item.publication
                      : item.organization}{" "}
                    • {item.date}
                  </>
                ) : (
                  <>
                    <Award className="inline-block w-4 h-4 mr-1" />
                    {"organization" in item
                      ? item.organization
                      : item.publication}{" "}
                    • {item.date}
                  </>
                )}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
