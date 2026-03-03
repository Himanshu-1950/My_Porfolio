import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                        Welcome to my portfolio
                    </span>
                    <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">[Name]</span>
                        <br />
                        <span className="text-4xl md:text-6xl text-muted-foreground">Full Stack Developer</span>
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                        I build exceptional digital experiences that are fast, accessible, and visually appealing.
                        Passionate about AI, React, and solving real-world problems.
                    </p>

                    <div className="mt-10 flex gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default Hero;
