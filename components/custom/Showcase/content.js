import { motion, AnimatePresence } from "framer-motion";

import Col from "../../layout/Col";
import Container from "../../layout/Container";
import Row from "../../layout/Row";

import styles from "./Showcase.module.scss";

const ShowcaseContent = (activeIndex, items) => {
  const headlineVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  const numberVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <div className={styles.showcase__content}>
      <Container>
        <Row alignItems="flex-end" paddingBottom={2}>
          <Col md={1}>
            <span className={styles.showcase__counter}>
              {activeIndex + 1}/{items.length}
            </span>
          </Col>
          <Col xs={3} md={5}>
            <motion.div
              variants={numberVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={`number-${activeIndex}`}
            >
              <span className={styles.showcase__number}>{activeIndex + 1}</span>
            </motion.div>
          </Col>
          <Col xs={9} md={6}>
            <motion.h2
              variants={headlineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.showcase__artist}
              key={`artist-${activeIndex}`}
            >
              {items[activeIndex].name}
            </motion.h2>
          </Col>
        </Row>
        <Row paddingBottom={2} paddingTop={2} borderTop={1}>
          <Col md={1}>
            <Row justifyContent="space-between">
              <button
                onClick={() => {
                  setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
                }}
              >
                prev
              </button>
              <button
                onClick={() => {
                  setActiveIndex(
                    activeIndex >= items.length - 1
                      ? items.length - 1
                      : activeIndex + 1
                  );
                }}
              >
                next
              </button>
            </Row>
          </Col>
          <Col md={5}>Latest releases</Col>
          <Col md={6}>
            <button>Watch music video</button>
            <button>view artist page</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ShowcaseContent;
