import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  return (
    // <div className="bg-red-100 md:bg-green-100 lg:bg-yellow-100 flex flex-col items-center justify-center">
    //   <h1 className="text-red-600 md:text-green-600 lg:text-yellow-600">Hello World!</h1>
    //   <Button>Click Me</Button>
    // </div>

    <div className="container mx-auto pt-10">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Malupiton x Joel</CardTitle>
          <CardDescription>Content Creator</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Joel Ravanera, or known online as Malupiton, is a Filipino social media personality and entertainer. He is known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.</p>
        </CardContent>
        <CardFooter>
          <Button>Visit Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;