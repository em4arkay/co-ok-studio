import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/bread1.jpg";
import image2 from "@/assets/bread2.jpg";
import image3 from "@/assets/cakes1.jpg";
import image4 from "@/assets/cakes2.jpg";
import image5 from "@/assets/cooking1.jpg";
import image6 from "@/assets/cooking2.jpg";
import image7 from "@/assets/kids1.jpg";
import image8 from "@/assets/kids2.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Bread Class",
    image: image1,
  },
  {
    name: "",
    description: 
      "Nothing beats the inviting smell of freshly handmade bread that fills up the entire house. Share the happiness with your family and friends by presenting them your own creation!",
    image: image2,
  },
  {
    name: "Cake Class",
    image: image3,
  },
  {
    name: "",
    description:
      "Bake up something for every occassion. Handmade cake makes a delectable gift for your friends and loved ones. Let's learn something about cake in a happy way.",
    image: image4,
  },
  {
    name: "Cooking Class",
    image: image5,
  },
  {
    name: "",
    description:
      "From Japanese Classics to World Cuisine, you will learn different food culture and culinary skills in our Cooking Course. We provide you with recipes from home cooking to fine dining. Let's try them all to become a perfect chef!",
    image: image6,
  },
  {
    name: "Kids Class",
    image: image7,
  },
  {
    name: "",
    description:
      "Kids Course is designed to teach children cooking of food and also the background knowledge about the relationship between food and science. Kids can develop a healthy daily eating habit and learn culinary basic in a fun and happy atmosphere.",
    image: image8,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>
              <span className="text-primary-500">O</span>UR CLASSES
            </HText>
            <p className="py-5">
              The classes are done in a small group, 
              ensuring you maximum support from the instructors. 
              Lessons are held multiple times a day (including Bread, Cake, Cooking and Kids), 
              and you can easily reserve the classes through Member's page.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
