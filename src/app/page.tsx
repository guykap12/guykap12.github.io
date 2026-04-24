import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData, preprintData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { sectionOrder, Section } from "@/data/section-order";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About Section: Description with Decal Image below */}
            {aboutMe.description && (
              <section>
                <div className="flex flex-col items-start">
                  <div>
                    <p
                      className="font-serif text-xl leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                      dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                    />
                  </div>
                  <div className="mt-4">
                    <Image
                      src="/telaviv-art.png"
                      alt="Tel Aviv Art Decal"
                      width={300}   // adjust width as needed
                      height={200}  // adjust height as needed
                      className="object-contain"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase">
                          News
                        </h2>
                        <ul className="max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
                          {newsData.map((news, index) => (
                            <NewsEntry key={index} news={news} />
                          ))}
                        </ul>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-12 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                        {preprintData.length > 0 && (
                          <>
                            <h3 className="font-serif text-lg mt-16 mb-8 tracking-wide text-zinc-500 uppercase">
                              Preprints
                            </h3>
                            <div className="space-y-8">
                              {preprintData.map((preprint, index) => (
                                <div key={index} className="flex flex-col sm:flex-row gap-6">
                                  {preprint.imageUrl && (
                                    <div className="w-full sm:w-1/4 min-w-[160px]">
                                      <Image
                                        src={preprint.imageUrl}
                                        alt={preprint.title}
                                        width={160}
                                        height={0}
                                        style={{ height: "auto", width: "100%" }}
                                        className="rounded-lg"
                                      />
                                    </div>
                                  )}
                                  <div className="flex flex-col flex-1 text-sm text-zinc-600 leading-relaxed">
                                    <p className="font-serif text-md text-zinc-900 mb-1">{preprint.title}</p>
                                    <p className="text-zinc-500 mb-1">
                                      {preprint.authors.split(/(Guy Kaplan)/).map((part, i) =>
                                        part === "Guy Kaplan" ? <strong key={i}>{part}</strong> : part
                                      )}
                                    </p>
                                    {preprint.venue && (
                                      <p className="italic text-zinc-400 mb-2">{preprint.venue}</p>
                                    )}
                                    {preprint.paperUrl && (
                                      <a href={preprint.paperUrl} className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300">
                                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                        <span className="tracking-wider uppercase">Paper</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}