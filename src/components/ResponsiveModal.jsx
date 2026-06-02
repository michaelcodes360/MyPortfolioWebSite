import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { RiCalendarScheduleLine } from "react-icons/ri";
import BookMeForm from "./BookMeForm";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
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

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Date is required"),
});

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
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-zinc-800 sm:max-w-[26.5rem]">
          <DialogHeader>
            <DialogTitle>{bookFor}</DialogTitle>
            <DialogDescription className="text-mist-500">
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
      <DrawerContent className="bg-zinc-950 px-2 pb-2">
        <DrawerHeader className="text-left">
          <DrawerTitle>{bookFor}</DrawerTitle>
          <DialogDescription className="text-mist-500">
            Ready to start your project? Fill out the form below and let’s make
            it happen.
          </DialogDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        {/* <BookMeForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button onClick={whenClicked} className={"bg-zinc-900 hover:bg-red-600 cursor-pointer"}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveModal;

function ProfileForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Profile Form Submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid items-start gap-5 sm:gap-6", className)}
    >
      <div className="grid gap-3">
        <Label htmlFor="name">Full Name<span className="text-red-500 ml-0.5">*</span></Label>
        <Input
          id="name"
          placeholder="enter your full name..."
          className={errors.name ? "border-red-500" : ""}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email<span className="text-red-500 ml-0.5">*</span></Label>
        <Input
          id="email"
          type="email"
          placeholder="example@mail.com"
          className={errors.email ? "border-red-500" : ""}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="date">Date<span className="text-red-500 ml-0.5">*</span></Label>
        <Input
          id="date"
          type="date"
          className={errors.date ? "border-red-500" : ""}
          {...register("date")}
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="hover:bg-green-600 cursor-pointer">
        {isSubmitting ? "Saving..." : "Save changes"}
      </Button>
    </form>
  );
}
