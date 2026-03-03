import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Terminal, GitBranch } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <Globe size={24} />, desc: 'React.js, HTML, CSS, Bootstrap, JavaScript' },
        { name: 'Backend Development', icon: <Terminal size={24} />, desc: 'Python, Django, Node.js, REST APIs' },
        { name: 'Databases', icon: <Database size={24} />, desc: 'MySQL, MongoDB' },
        { name: 'AI & Machine Learning', icon: <Cpu size={24} />, desc: 'Machine Learning Basics, TensorFlow' },
        { name: 'Tools & Version Control', icon: <GitBranch size={24} />, desc: 'Git & GitHub, Testing, Documentation' },
    ];

    return (
        <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-50">About Me</h2>
                    <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-slate-50">Who I am</h3>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            I am an aspiring full-stack developer with a strong foundation in frontend and backend technologies, passionate about building clean, responsive, and user-focused web applications. I enjoy solving problems on LeetCode and continuously improving my skills through hands-on projects and certifications.
                        </p>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            With experience in building full-stack applications using modern technologies,
                            I am always looking for new challenges to solve using code and contribute to real-world software solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600 hover:border-sky-400/50 transition-colors"
                            >
                                <div className="text-sky-400 mb-4">{skill.icon}</div>
                                <h4 className="font-bold text-slate-50 mb-2">{skill.name}</h4>
                                <p className="text-sm text-slate-400">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
