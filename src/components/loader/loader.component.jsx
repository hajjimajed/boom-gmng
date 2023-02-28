import './loader.styles.scss'


import './loader.styles.scss'
import { motion } from 'framer-motion'

const icon = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)",
        opacity: 0
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)",
        opacity: 1
    }
}

const Loader = () => {
    return (
        <div className='loader-container'>
            <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className='loader-logo-container'>
                <motion.svg
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 4.5,

                    }}
                    className='logo' width="424" height="129" viewBox="0 0 424 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ translateX: -50, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{
                            default: { duration: 0.5, ease: "easeInOut" },
                            fill: { duration: 0.5, ease: [1, 0, 0.8, 1] },
                            delay: 2.3
                        }}
                        d="M0 0V128.5H59H68L76.5 127L81 126L87 124L93 121L96.5 118.5L99.5 116L102 113L103.5 110.5L105.5 107.5L107 104.5L104.5 101L102 97L99.5 92L97.5 86L96 80.5L95 76L94.5 72V67.5V63.5L93 62.5L91 61.5L87 60.5L91 58.5L93.5 57L95 56L95.5 52.5L96 49.5L96.5 46.5L97.5 43L98.5 39.5L99.5 37L100.5 34.5L102 32L103.5 29L102 24.5L100.5 21L97.5 16.5L94 12.5L90 9.5L85.5 6.5L81 4.5L76.5 3L71.5 1.5L67 0.5L63.5 0H61H0Z" fill="white" />
                    <motion.path
                        initial={{ translateX: -50, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{
                            default: { duration: 0.5, ease: "easeInOut" },
                            fill: { duration: 0.5, ease: [1, 0, 0.8, 1] },
                            delay: 2.3
                        }}
                        d="M38 30V52H53.5L56 51.5L58.5 50.5L61.5 49.5L63.5 48L65.5 45.5L66.5 43V41.5V39L65.5 36.5L63.5 34L61.5 32.5L58.5 31L55.5 30H52.5H38Z" fill="#EF233C" />
                    <motion.path
                        initial={{ translateX: -50, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{
                            default: { duration: 0.5, ease: "easeInOut" },
                            fill: { duration: 0.5, ease: [1, 0, 0.8, 1] },
                            delay: 2.3
                        }}
                        d="M38.5 75V97.5H62L65.5 96.5L68 95L71 91L72 88.5V85.5L71 83.5L69 80.5L66.5 78L63 76.5L60 75.5L57.5 75H38.5Z" fill="#EF233C" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                            delay: 0.2
                        }}
                        d="M161.5 24.5C159.1 27.7 158.167 29.5 158 30L152 32.5L148 34.5L144.5 37.5L140.5 42L137 47.5L134 53.5L133 59L132.5 62.5V66L133.5 72.5L136 80L139.5 86L144.5 91.5L150 95.5L154.5 97.5L160.5 99.5H165.5H171H173.5L179 97.5L184.5 94.5L189 91L194 86L197 81L199 77L200 72.5L200.5 68.5L201 64L200.5 60L200 56.5L199 53L198 50L199 49L201 46L203 44L206.5 41L209.5 39.5L213.5 37.5L217 36.5H219.5H222.5L225.5 37L228 44L230.5 51L231 55.5V59.5V65V71L230.5 75.5L229.5 80L228 85.5L224.5 93.5L220.5 100.5L216.5 105.5L212.5 110L207.5 114L200.5 118.5L194.5 121.5L186 125L181 126L175 127L169 127.5H164L159 127L155 126.5L148.5 125L144 123.5L138.5 121.5L133.5 119.5L128.5 116L123 112L119.5 108.5L116 105L113.5 101L111 97L108.5 92.5L106 87.5L104.5 82.5L103 76L102.5 71L102 66V62L102.5 57L103 52L104.5 46L106 41.5L108.5 36L111 32L114 27.5L119 21.5L126 15L134 10L141 6.5L149.5 4L160.5 2L170 1.5L177 2L183.5 4L177 8.5L171 13C168.833 15.5 163.9 21.3 161.5 24.5Z" fill="white" />
                    <motion.path
                        initial={{ translateX: 50, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{
                            default: { duration: 0.5, ease: "easeInOut" },
                            fill: { duration: 0.5, ease: [1, 0, 0.8, 1] },
                            delay: 2.3
                        }}
                        d="M274.5 112.5L271.5 115L270.5 129H308.5L313 69L335.5 129H358L381 69L386 129H423.5L412 0H375.5L347 71.5L318 0H282L280 23.5L283.5 29L286.5 34.5L289 40.5L291 46.5L292.5 55.5L293.5 63V69.5L292.5 77L291 84L289 90L286 97L282 103.5L277.5 109L274.5 112.5Z" fill="white" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                            delay: 0.2
                        }}
                        d="M160.5 87L163 92L168.5 92.5L171.5 92L175.5 91L180.5 89L184 86L187.5 82L190 78.5L187.5 70L187 64.5L187.5 60L188.5 54.5L190.5 48.5L194 42.5L197.5 38.5L203.5 34L209 31.5L216.5 29.5L222 29L227.5 29.5L234.5 31.5L242 36.5L248 42.5L252.5 49.5L254 54.5L255 61.5V67.5L254 73.5L252.5 79L250 83.5L246 89L242 92.5L236.5 96.5L230 99L227 104L224 108L220 112.5L215.5 117L211 120.5L204.5 125L210.5 126.5L213 127H219H225.5L233 126.5L240.5 124.5L247.5 122L255 118.5L264.5 112L271.5 105L275.5 99L280 91L283.5 83L285.5 77.5L286.5 72V65V60L285.5 54.5L284 48.5L281.5 40.5L277 31.5L270.5 23L263 15.5L254 9.5L245 5.5L237 3L230 2L225 1.5H218.5L214 2L206.5 3L196 6L186.5 11L177.5 17.5L170.5 24.5L165.5 31.5L162 38.5L160 43.5L158.5 48.5L157.5 54L157 59V62V69.5L157.5 76L159 82.5L160.5 87Z" fill="white" />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Loader;