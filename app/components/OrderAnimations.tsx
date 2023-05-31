import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import prep from "@/public/orderprepanimation.json";
import confirm from "@/public/orderconfirmanimation.json";

export const PrepOrderAnimation = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24 p-12 ">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        Getting your order ready!
      </motion.h1>
      <Player autoplay loop src={prep}></Player>
    </div>
  );
};

export const ConfirmOrderAnimation = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24 p-12 ">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <a href="./Dashboard">View Your Order</a>
      </motion.h1>
      <Player autoplay loop src={confirm}></Player>
    </div>
  );
};
