import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import logo from '../public/logo.png';

const page = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
      <Image src={logo} alt="Logo" className="w-auto h-10" />
        <h1 className="text-xl font-medium">Overnight AI - Landing Page</h1>

        <Button>Let's Start</Button>
      </div>
    </div>
  );
};

export default page;
