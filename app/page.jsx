import { getVoters } from "@/actions";
import About from "./components/About";
import Acheivments from "./components/Acheivments";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Ignite from "./components/Ignite";
import Mission from "./components/Mission";
import Raw from "./components/Raw";
import YouthLeader from "./components/YouthLeader";

export async function Home() {
  const votes = await getVoters();
  console.log(votes);
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Ignite />
      <YouthLeader />
      <Acheivments />
      <Raw />
      <Form />
    </>
  );
}
