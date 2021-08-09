import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import image from '../images/interior-1.jpg';

import Button from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const SectionView = () => (
  <Section>
    <Container>
      <ColumnLeft>
        <motion.h2
          initial={{ opacity: 0, x: 0, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          Slodurum papirus ectum dolorum
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 0, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          Slodurum papirus ectum dolorum
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 0, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          Slodurum papirus ectum dolorum
        </motion.p>
        <Button primary="true" to="/homes">
          Zhmyakay
        </Button>
      </ColumnLeft>
      <ColumnRight reverse={false}>
        <motion.img
          src={image}
          alt="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 10, x: -10 }}
          transition={{ duration: 1 }}
        />
      </ColumnRight>
    </Container>
  </Section>
);

export default SectionView;
