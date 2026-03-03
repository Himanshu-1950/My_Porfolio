import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
            description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
            credentialId: 'AWS-123456'
        },
        {
            title: 'Google Cloud Professional Developer',
            issuer: 'Google Cloud',
            date: '2023',
            description: 'Proficient in developing scalable applications on Google Cloud Platform.',
            credentialId: 'GCP-789012'
        },
        {
            title: 'React Developer Certification',
            issuer: 'Meta',
            date: '2022',
            description: 'Certified in advanced React development techniques and best practices.',
            credentialId: 'META-REACT-345678'
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-50">Certifications</h2>
                    <div className="w-20 h-1 bg-sky-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-700/50 border border-slate-600 rounded-2xl p-6 hover:border-sky-400/50 transition-colors h-full flex flex-col"
                        >
                            <div className="flex flex-col items-center text-center mb-4">
                                <div className="w-14 h-14 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400 mb-4">
                                    <Award size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-50 mb-2">{cert.title}</h3>
                                <p className="text-sky-400 font-medium mb-1">{cert.issuer}</p>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm text-center mb-4 flex-grow">{cert.description}</p>
                            <div className="text-sm text-slate-500 text-center pt-4 border-t border-slate-600">
                                <span className="font-medium">Credential ID:</span> {cert.credentialId}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
