import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink } from 'lucide-react';

const CodingProfiles = () => {
    const profiles = [
        {
            name: 'GitHub',
            username: 'Himanshu-1950',
            url: 'https://github.com/Himanshu-1950',
            icon: <Github size={24} />,
            description: 'View my code repositories and contributions',
            color: 'hover:text-gray-300'
        },
        {
            name: 'LeetCode',
            username: 'Himanshu_khobaragade',
            url: 'https://leetcode.com/u/Himanshu_khobaragade/',
            icon: <Code size={24} />,
            description: 'Check out my problem-solving skills',
            color: 'hover:text-yellow-400'
        }
    ];

    return (
        <section id="profiles" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Coding Profiles</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Explore my coding journey and problem-solving skills across different platforms
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {profiles.map((profile, index) => (
                        <motion.a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-white/10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-primary group-hover:scale-110 transition-transform">
                                    {profile.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                                    <p className="text-primary text-sm">@{profile.username}</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-4">{profile.description}</p>

                            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                                Visit Profile <ExternalLink size={16} />
                            </div>

                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
