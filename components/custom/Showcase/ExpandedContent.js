import { useState } from "react";

import { motion } from "framer-motion";

import ButtonUI from "../../html/ButtonUI";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import Heading from "../../html/Heading";

import styles from "./Showcase.module.scss";

const ShowcaseExpandedContent = ({
  activeIndex,
  albums,
  items,
  setIsExpanded,
}) => {
  const [isGridVisible, setIsGridVisible] = useState(false);

  const topVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 0.25,
        ease: "linear",
      },
    },
    exit: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <section className={styles.showcase__expanded__content}>
      <ButtonUI
        icon="faXmark"
        clickHandler={() => {
          setIsExpended(false);
        }}
      />
      <motion.div
        className={styles.showcase__expanded__content__bottom}
        id="bottomContent"
      >
        <Container>
          <Heading level={2} marginBottom={2} marginTop={4}>
            Albums
          </Heading>
          {isGridVisible && <Grid items={albums} />}
        </Container>
      </motion.div>
    </section>
  );
};
export default ShowcaseExpandedContent;
