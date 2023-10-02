"use client";
import Tabs from "@/components/tabs";
import AccordionCustomAnimation from "@/components/DefaultAccordion";

export default function Homepage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.divider}></div>
        <Tabs />
        <AccordionCustomAnimation />
      </div>
    </div>
  );
}

const styles = {
  mainContainer:
    "w-screen h-screen bg-background flex justify-center aligns-center",
  container: " max-w-[700px]	w-full	",
  divider: "bg-yellow h-3 w-full my-5 mb-10	",
  tabs: "flex justify-center aligns-center text-white	",
};
