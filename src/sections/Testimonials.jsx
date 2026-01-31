import { awardsAndCertifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Awards = () => {
    return (
        <section id="awards" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Awards & Certifications"
                    sub="🏆 Recognition, training, and credentials"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {awardsAndCertifications.map((award, index) => (
                        <GlowCard
                            card={award}
                            key={index}
                            index={index}
                            variant="award"
                        >
                        <div className="flex items-start gap-3">
                                <div className="w-12 h-12 flex-shrink-0">
                                    <img
                                        src={award.imgPath}
                                        alt={award.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div>
                                    <p className="font-bold leading-tight">{award.title}</p>
                                    <p className="text-sm text-white-50">
                                        {award.issuer} • {award.year}
                                    </p>
                                    <p className="text-sm mt-2 text-white-50">
                                        {award.desc}
                                    </p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
