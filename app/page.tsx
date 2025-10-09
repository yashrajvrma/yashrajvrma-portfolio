import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Project from "@/components/Project";
import Skill from "@/components/Skills";
import WorkExperience from "@/components/Work-Experience";

export default function Home() {
  return (
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm min-h-screen relative px-2">
      <div className="absolute top-20 left-0 right-0 border-b-1 border-border border-dashed w-full"></div>
      <div className="relative border-x-1 border-border border-dashed sm:max-w-xl max-w-sm min-h-screen h-full">
        <div className="flex flex-col sm:max-w-xl max-w-sm w-full h-full sm:px-2 px-4 mt-20 ">
          <Header />
          <Bio />
          <Links />
          <Skill />
          <WorkExperience />
          <Project />
          <Footer />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t-1 border-border border-dashed w-full py-10"></div>
    </div>
  );
}
