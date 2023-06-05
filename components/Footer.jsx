'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Join us for 50th Anniversary
        </h4>
        
        <a href="https://www.google.com/maps/dir/28.6359438,77.2290188/mukut+residiency/@28.6372909,77.231325,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390cfb75eb8c6081:0xb6b83597604eb395!2m2!1d77.3638099!2d28.6545806?entry=ttu">
        <button  type="button"  className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Venu Map Location
          </span>
        </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            UmaVeena
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 UmaVeena. All rights reserved.
          </p>

          
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
