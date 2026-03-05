import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { RiCalendarScheduleLine } from "react-icons/ri";
import BookMeForm from "./BookMeForm";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
// import { Dialog, } from "radix-ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";

const ResponsiveModal = ({ bookFor, whenClicked }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Book me <RiCalendarScheduleLine />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25 bg-zinc-800">
          <DialogHeader>
            <DialogTitle>{bookFor}</DialogTitle>
            <DialogDescription>
              Ready to start your project? Fill out the form below and let’s
              make it happen.
            </DialogDescription>
          </DialogHeader>
          {/* <BookMeForm /> */}
          <ProfileForm className="px-4" />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
            Book me <RiCalendarScheduleLine />
          </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-950">
        <DrawerHeader className="text-left">
          <DrawerTitle>{bookFor}</DrawerTitle>
          <DialogDescription>
            Ready to start your project? Fill out the form below and let’s make
            it happen.
          </DialogDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        {/* <BookMeForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button onClick={whenClicked}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveModal;

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3 ">
        <Label htmlFor="email">Full Name</Label>
        <Input type="text" id="text" placeholder="enter your full name..." />
      </div>
      <div className="grid gap-3 ">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="example@mail.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Date</Label>
        <Input id="username" placeholder="enter your name" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
