import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle } from
"@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger } from
"@/components/ui/dialog";
import { Gift, Heart, Utensils } from "lucide-react";
import celebrationImage from "@/assets/celebration-image.jpg";
import luminiscenseImage from "@/assets/luminiscense.jpg";
import massageImage from "@/assets/massage-voucher.jpg";

const DinnerOptions = () => {
  const options = [
  {
    name: "Flax & Kale",
    location: "Carrer de los Tallers, 74",
    visitLink: "https://maps.app.goo.gl/f84wPMDYJmtn2fVb8?g_st=aw",
    calendarLink:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Cena+en+Flax+%26+Kale&dates=20260214T183000Z/20260214T203000Z&details=Cena+rom%C3%A1ntica+con+Andr%C3%A9s&location=Carrer+de+los+Tallers,+74,+08001+Barcelona"
  },
  {
    name: "Al Arabia",
    location: "Carrer d'en Gignàs, 16",
    visitLink: "https://maps.app.goo.gl/ZSVQxo8emZabk7Fe6?g_st=aw",
    calendarLink:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Cena+en+Al+Arabia&dates=20260214T183000Z/20260214T203000Z&details=Cena+rom%C3%A1ntica+con+Andr%C3%A9s&location=Carrer+d%27en+Gign%C3%A0s,+16,+08002+Barcelona"
  },
  {
    name: "Les Quinze Nits",
    location: "Plaça Reial, 6",
    visitLink: "https://maps.app.goo.gl/51gNAWEAq4NEN7Hs5?g_st=aw",
    calendarLink:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Cena+en+Les+Quinze+Nits&dates=20260214T183000Z/20260214T203000Z&details=Cena+rom%C3%A1ntica+con+Andr%C3%A9s&location=Pla%C3%A7a+Reial,+6,+08002+Barcelona"
  }];


  return (
    <div className="space-y-4">
      <p className="text-center text-gray-600 mb-4">
        Choose your favorite spot for our date night!
      </p>
      {options.map((opt, i) =>
      <div
        key={i}
        className="p-4 border rounded-lg hover:bg-lover-pink/20 transition-colors flex justify-between items-center group">

          <div>
            <h3 className="font-bold text-gray-800">{opt.name}</h3>
            <a
            href={opt.visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lover-red hover:underline">

              Visit Website
            </a>
          </div>
          <Button
          asChild
          size="sm"
          className="bg-lover-red hover:bg-red-600 text-white">

            <a href={opt.calendarLink} target="_blank" rel="noopener noreferrer">
              Choose
            </a>
          </Button>
        </div>
      )}
    </div>);

};

const ExperienceOption = () =>
<div className="text-center space-y-4">
    <div className="rounded-lg overflow-hidden shadow-md">
      <img

      alt="Luminiscense Show"
      className="w-full h-48 object-cover" src="https://applications-media.feverup.com/image/upload/f_auto,w_720,h_720/fever2/plan/photo/2c080ed8-b015-11f0-93e1-a2d06967b13e.png" />

    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">LUMINISCENSE</h3>
      <p className="text-gray-600 mb-4">
        An immersive light and sound experience in the heart of Barcelona.
      </p>
      <Button asChild className="w-full bg-lover-red hover:bg-red-600">
        <a
        href="https://feverup.com/m/429795"
        target="_blank"
        rel="noopener noreferrer">

          View Details
        </a>
      </Button>
    </div>
  </div>;


const SurpriseOption = () =>
<div className="text-center space-y-4">
    <div className="rounded-lg overflow-hidden shadow-md border-2 border-gold-500">
      <img
      src={massageImage}
      alt="Massage Voucher"
      className="w-full object-cover" />

    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-lover-red">Romantic Massage</h3>
      <p className="text-gray-600 italic">
        "Relax, unwind, and let me take care of you."
      </p>
      <div className="mt-4 p-3 bg-lover-pink/30 rounded-lg border border-lover-pink border-dashed">
        <p className="text-sm font-semibold text-lover-red">
          Voucher Code: LOVE-2026
        </p>
      </div>
    </div>
  </div>;


const PrizeCard = ({
  number,
  title,
  icon,
  content





}: {number: number;title: string;icon: React.ReactNode;content: React.ReactNode;}) =>
<Dialog>
    <DialogTrigger asChild>
      <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-lover-pink bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="w-12 h-12 bg-lover-pink rounded-full flex items-center justify-center mx-auto mb-2">
            {icon}
          </div>
          <CardTitle className="font-serif text-xl">{title}</CardTitle>
          <CardDescription>Prize #{number}</CardDescription>
        </CardHeader>
      </Card>
    </DialogTrigger>
    <DialogContent className="max-w-md sm:max-w-lg bg-white/95 backdrop-blur-md border-lover-pink">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl text-center text-lover-red">
          {title}
        </DialogTitle>
      </DialogHeader>
      <div className="mt-4">{content}</div>
    </DialogContent>
  </Dialog>;


export const SuccessState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 space-y-8 animate-fade-in relative z-10 py-12">
      <h1 className="font-serif text-4xl md:text-6xl font-bold text-lover-red animate-bounce">
        Congratulations! ❤️
      </h1>

      <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-300">
        <img

          alt="Celebration"
          className="w-full h-full object-cover" src="/lovable-uploads/4682c422-f50c-4d0f-a9d6-c289c603c768.jpg" />

      </div>

      <div className="space-y-6 w-full max-w-4xl">
        <h2 className="text-2xl font-serif text-gray-800">
          You have won these 3 prizes:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrizeCard
            number={1}
            title="Dinner"
            icon={<Utensils className="w-8 h-8 text-lover-red" />}
            content={<DinnerOptions />} />

          <PrizeCard
            number={2}
            title="Experience"
            icon={<Heart className="w-8 h-8 text-lover-red" />}
            content={<ExperienceOption />} />

          <PrizeCard
            number={3}
            title="Surprise"
            icon={<Gift className="w-8 h-8 text-lover-red" />}
            content={<SurpriseOption />} />

        </div>
      </div>
    </div>);

};
