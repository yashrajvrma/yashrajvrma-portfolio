import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Links from "@/components/Links";
import Project from "@/components/Project";
import Skill from "@/components/Skills";
import WorkExperience from "@/components/Work-Experience";

export default function Home() {
  return (
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm">
      <div className="flex flex-col sm:max-w-lg max-w-sm w-full h-full mt-20 sm:px-2 px-4">
        {/* header and profile photo */}
        <Header />

        {/* bio section */}
        <Bio />

        {/* link section  */}
        <Links />

        {/* skill section  */}
        <Skill />

        {/* work exp */}
        <WorkExperience />

        {/* projects section */}
        <Project />

        {/* footer section  */}
        <Footer />
      </div>
    </div>
  );
}
