import React from "react";
import { FlipCard } from "./animate-ui/components/community/flip-card";
import { BlurFade } from "./ui/blur-fade";
import BookMeModal from "./BookMeModal";
import BookMeForm from "./BookMeForm";

const Services = () => {
  const handleShowModal = () => {
    setshowModal(true);
  };
  const data = {
    data1: {
      name: "Web Development",
      username: "michaelcodes360",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      bio: "I develop fully functional websites and applications for individuals and corporate organizations.",
      stats: { following: 200, followers: 2900, posts: 120 },
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },

    data2: {
      name: "UI/UX Design",
      username: "michaelcodes360",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
      bio: "I design intuitive and visually engaging UI/UX experiences for both individuals and corporate organizations.",
      stats: { following: 200, followers: 2900, posts: 120 },
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },

    data3: {
      name: "Mobile Development",
      username: "michaelcodes360",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
      bio: "I build modern, high-performance mobile applications with seamless user experience.",
      stats: { following: 200, followers: 2900, posts: 120 },
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
  };

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <BlurFade delay={0.25 * 4}>
          {/* <FlipCard data={data.data1} /> */}
          <FlipCard data={data.data1}>
            <BookMeModal>
              <BookMeForm bookFor={"Book for Web Development"} />
            </BookMeModal>
          </FlipCard>
        </BlurFade>
        <BlurFade delay={0.25 * 5}>
          {/* <FlipCard data={data.data2} /> */}
          <FlipCard data={data.data2}>
            <BookMeModal>
              <BookMeForm bookFor={"Book for UI/UX Design"} />
            </BookMeModal>
          </FlipCard>
        </BlurFade>
        <BlurFade delay={0.25 * 6}>
          {/* <FlipCard data={data.data3} /> */}
          <FlipCard data={data.data3}>
            <BookMeModal>
              <BookMeForm />
            </BookMeModal>
          </FlipCard>
        </BlurFade>
      </div>
    </>
  );
};

export default Services;
