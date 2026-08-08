import { motion } from "framer-motion";

const strawberryImage = "/assets/hero.png";

export default function RawFlavorBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF8EB] py-10 sm:py-14">
      <div className="relative mx-auto w-[92%] max-w-[1400px]">

        {/* TOP SVG BORDER */}
        <motion.svg
          className="absolute left-0 top-0 z-10 h-[2px] w-full"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <motion.line
            x1="0"
            y1="1"
            x2="1000"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#5B1D17]"
            pathLength="1"
          />
        </motion.svg>

        {/* BOTTOM SVG BORDER */}
        <motion.svg
          className="absolute bottom-0 left-0 z-10 h-[2px] w-full"
          viewBox="0 0 1000 2"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 2,
            delay: 0.25,
            ease: "easeInOut",
          }}
        >
          <motion.line
            x1="0"
            y1="1"
            x2="1000"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#5B1D17]"
            pathLength="1"
          />
        </motion.svg>

        {/* CONTENT */}
        <div className="grid min-h-[190px] grid-cols-1 md:grid-cols-[0.8fr_1.5fr_0.7fr]">

          {/* LEFT */}
          <div className="relative flex items-center border-[#5B1D17] py-8 md:border-r">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
                max-w-[220px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-[#5B1D17]
                text-3xl
                sm:text-4xl
              "
            >
              TYPES OF
              <br />
              RAW FLAVOR
            </motion.h2>

            {/* STRAWBERRY ON BORDER */}
            <motion.img
              src={strawberryImage}
              alt=""
              initial={{
                opacity: 0,
                scale: 0.3,
                rotate: -20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -8,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                type: "spring",
                stiffness: 120,
              }}
              className="
                absolute
                -bottom-7
                left-[72%]
                z-30
                w-20
                object-contain
                sm:w-24
              "
            />
          </div>

          {/* CENTER */}
          <div className="flex items-center justify-center px-6 py-8 text-center md:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="
                max-w-[620px]
                text-sm
                font-medium
                leading-6
                text-[#5B1D17]
                sm:text-base
              "
            >
              We improve flavor consistency, boost and balance taste profiles,
              and increase the perception of luxury with every mouthful.
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center border-[#5B1D17] py-8 md:border-l">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {/* CUSTOMER AVATARS */}
              <div className="flex -space-x-3">
                <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FFF8EB] bg-[#F3B29D]">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FFF8EB] bg-[#E7A8C3]">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FFF8EB] bg-[#E9B08C]">
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* CUSTOMER COUNT */}
              <div className="leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-[#5B1D17] sm:text-3xl">
                    1800
                  </span>

                  <span className="text-lg font-black text-[#5B1D17]">
                    +
                  </span>
                </div>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#5B1D17]">
                  Customers
                </p>
              </div>
            </motion.div>

            {/* SMALL STRAWBERRY */}
            <motion.img
              src={strawberryImage}
              alt=""
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 1.4,
                type: "spring",
              }}
              className="
                absolute
                -right-3
                -bottom-4
                z-30
                w-12
                rotate-[18deg]
                object-contain
              "
            />
          </div>
        </div>

        {/* EXTRA VERTICAL SVG DIVIDERS */}

        <motion.svg
          className="pointer-events-none absolute left-[28%] top-0 hidden h-full w-[2px] md:block"
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#5B1D17]"
            pathLength="1"
          />
        </motion.svg>

      </div>
    </section>
  );
}