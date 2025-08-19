import { Icons } from "@/components/Icons/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, Zap } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <section className="flex justify-center h-[50vh] sm:h-[70vh] w-full">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Manage Your Content With Ease
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto text-center">
              StreamLine your Content Workflow, Publish with Confidence
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="/blog" className="bg-gray-200 text-black px-4 flex items-center hover:bg-gray-400 transition-all duration-200 delay-100 rounded-md">
              Try It Out!
            </Link>
            <Button variant={"outline"}>Learn More</Button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="min-h-screen sm:min-h-[80vh] bg-gray-600/10 flex flex-col items-center w-full justify-center px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">
          <span className="flex flex-col items-center gap-2">
            <Icons.EditorIcon className="w-12 h-12 text-white" />
            <h3 className="text-xl font-bold text-gray-100 lg:text-3xl">
              Intuitive Editor
            </h3>
            <p className="text-gray-400 text-center w-[70%] lg:text-xl">
              Crete and Edit with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Layers size={50} />
            <h3 className="text-xl font-bold text-gray-100 lg:text-3xl">
              Flexible Tools
            </h3>
            <p className="text-gray-400 text-center w-[70%] lg:text-xl">
              Create and Edit with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className="text-xl font-bold text-gray-100 lg:text-3xl">
              Blazing Fast
            </h3>
            <p className="text-gray-400 text-center w-[70%] lg:text-xl">
              Crete and Edit with user friendly interface
            </p>
          </span>
        </div>
      </section>
      <section className="h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center items-center ">
        <div className="max-w-[28%] mx-auto">
          <h4 className="font-bold text-4xl">
            Ready to Transform your Content Journey?
          </h4>
          <p className="text-lg text-gray-400">
            Join thousands of content creators like you who chose our CMS
          </p>

          <div className="flex gap-3">
            <Input
              placeholder="Enter Your Email"
              className="w-full p-5"
            ></Input>
            <Button variant={"outline"} className="p-5">
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
