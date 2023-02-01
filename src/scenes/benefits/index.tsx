import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CakeIcon
} from "@heroicons/react/24/solid";
import cooking1 from "@/assets/cooking1.png";
import cooking2 from "@/assets/cooking2.png";
import cooking3 from "@/assets/cooking3.png";
import cooking4 from "@/assets/cooking4.png";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/cooking3.jpg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    // icon: <HomeModernIcon className="h-6 w-6" />,
    image: cooking1,
    title: "Bread Class",
    description:
      "You will acquire the necessary skills to bake delectable breads from scratch!",
  },
  {
    // icon: <UserGroupIcon className="h-6 w-6" />,
    image: cooking2,
    title: "Cake Class",
    description:
      "Learn how to bake all sorts of cakes, and each will only take 2 hours!",
  },
  {
    // icon: <CakeIcon className="h-6 w-6" />,
    image: cooking3,
    title: "Cooking Class",
    description:
      "The menus offered are not restricted to Japanese cuisine, we also offer cusines from all around the world!",
  },
  {
    // icon: <HomeModernIcon className="h-6 w-6" />,
    image: cooking4,
    title: "Kids Class",
    description:
      "Cooking class for kids! Have your kids experience the joy of cooking and eating delicious food! (Aged 4-8 years old)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            MORE THAN JUST C<span className="text-primary-500">O</span>OKING.
          </HText>
          <p className="my-5 text-sm">
            co_ok studio offers hands-on cooking and baking lessons held in a friendly and 
            relaxed environment. Learn from our team of professional instructors and 
            whip up fabulous meals with our Cooking Class, delectable pastries with 
            our Cake and Bread Class and educational Kids Class. Put aside 2 hours of 
            your time and choose lessons from the various timings that we have everyday.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              // icon={benefit.icon}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Why C
                    <span className="text-primary-500">O</span>
                    _OK Studio
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-xl">
                small group
                + 4 classes to choose from
                + 0 experience needed
                + beginner to master
              </p>
              <p className="mb-5">
                We always believes that happiness can be found using food as a medium. 
                Through the joy of making and eating, smiles are born. 
                We wish to bring joy to others by guiding them on how to make healthy cuisine 
                and we hope that this cycle of happiness can grow and spread wider. 
                And of course, bring smiles to dining tables all around the world.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
