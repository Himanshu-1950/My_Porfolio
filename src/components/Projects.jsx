import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Food Order List',
            description: 'A comprehensive food ordering application that allows users to browse menus, add items to cart, and place orders. Features include restaurant listings, meal customization, and order tracking.',
            tags: ['React', 'JavaScript', 'CSS', 'HTML'],
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2670&auto=format&fit=crop',
            github: 'https://github.com/Himanshu-1950/Food_Order_List',
            demo: '#',
            featured: true
        },
        {
            title: 'Legal Assistant',
            description: 'An AI-powered legal assistant application that helps users with legal document preparation, case research, and legal guidance. Features include document templates and legal information retrieval.',
            tags: ['Python', 'Django', 'AI', 'NLP'],
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop',
            github: 'https://github.com/Himanshu-1950/legal-assistance-for-lawyers',
            demo: '#',
            featured: true
        },
        {
            title: 'Management React',
            description: 'A comprehensive management dashboard built with React featuring intuitive UI components, data visualization, user management, and analytics for efficient business operations.',
            tags: ['React', 'JavaScript', 'Dashboard', 'Data Visualization'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
            github: 'https://github.com/Himanshu-1950/Management-React',
            demo: '#',
            featured: true
        },
        {
            title: 'Task Management',
            description: 'A full-featured task management system for organizing, tracking, and managing projects. Includes task creation, assignment, deadlines, priority levels, and progress tracking.',
            tags: ['React', 'Django', 'Python', 'REST APIs'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
            github: 'https://github.com/Himanshu-1950/Task-Management',
            demo: '#',
            featured: true
        },
        {
            title: 'Movie Recommendation',
            description: 'An intelligent movie recommendation system that suggests movies based on user preferences, viewing history, and collaborative filtering algorithms.',
            tags: ['Python', 'Machine Learning', 'Data Science', 'API'],
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop',
            github: 'https://github.com/Himanshu-1950/Movie--Suggestion.git',
            demo: '#',
            featured: true
        }
    ];

    return (
        <section id="projects" className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-background border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                        >
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex gap-2 mb-2 flex-wrap">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex gap-3 mt-auto">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition-colors">
                                        <Github size={14} /> View Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition-colors">
                                        <ExternalLink size={14} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
