import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MoveRight } from "lucide-react";
import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";

const CustomSidebar = ({ buttonName, Dtitle, Ddescription, children }) => {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <BlurFade delay={0.2 * 8}>
          <Button className="px-8 py-6 rounded-full cursor-pointer bg-yellow-400 btnEffect font-bold text-zinc-950 hover:bg-yellow-300">
            {buttonName} <MoveRight />
          </Button>
          </BlurFade>
        </DrawerTrigger>
        <DrawerContent className="bg-zinc-950 border-none p-1">
          <DrawerHeader>
            <div>
              <DrawerTitle className="text-3xl">
                {/* <Title title={"A bit of me"} style={{fontSize:"2px"}} /> */}
                {Dtitle}
                <div className="w-32 h-1 bg-indigo-500 mb-6 heroText rounded-lg"></div>
                </DrawerTitle>
            </div>
            <DrawerDescription className="text-gray-400">
              {Ddescription}
            </DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">{children}</div>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomSidebar;
