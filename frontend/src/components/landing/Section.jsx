import { motion } from "framer-motion";

export function Section({ id, className = "", children, eyebrow, title, subtitle }) {
    return (
        <section
            id={id}
            data-testid={`section-${id}`}
            className={`relative py-14 md:py-24 lg:py-28 ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
                {(eyebrow || title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-14"
                    >
                        {eyebrow && (
                            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-brand-gold-deep font-medium mb-3 md:mb-4">
                                <span className="w-8 h-px bg-brand-gold" />
                                {eyebrow}
                                <span className="w-8 h-px bg-brand-gold" />
                            </div>
                        )}
                        {title && (
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-navy text-balance leading-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-3 md:mt-5 text-brand-navy/65 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
}

export function FadeIn({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
