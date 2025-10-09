import Link from "next/link";

export default function Bio() {
  return (
    <div className="flex flex-col pt-5 text-secondary">
      <div>20 ★ Engineer ★ FullStack Developer</div>
      <br />
      <div>
        Hi there, I&apos;m Yashraj a final year undergrad{" "}
        <span>
          <Link
            className="hover:underline font-semibold text-blue-400 hover:text-blue-500"
            href="https://www.tcetmumbai.in/"
            target="_blank"
          >
            @TCET
          </Link>
        </span>{" "}
        pursuing Engineering. I love to build cool products that makes peoples
        live easier. I play, read books and create content for fun.
      </div>
    </div>
  );
}
