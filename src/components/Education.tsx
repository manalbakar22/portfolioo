"use client"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"

const Education = () => {
    const [index, setIndex] = useState(0)
    const [isAnimated, setIsAnimated] = useState(false)
    const [prevIndex, setPreviousIndex] = useState<number | null>(null)
    const education = {
        uni: "FST-Errachidia",
        description: "Faculté des sciences et techniques E-rrachidia  .",
        title: "Ingénieur en génie informatique, option génie logiciel et business intelligence",
        duration: "september 2020-july 2025"
    }
    const certificates: {
        uni: string,
        title: string,
        description: (() => JSX.Element),
        date: string
    }[] = [
            {
                uni: "SimplLearn",
                title: "Data Scientist: Statistics for Data Science",
                description: () => <><Check color="#6e06f2" className="lg:size-9 size-16" /><p className="lg:text-base text-xs">Simplilearn offers comprehensive training on various data science technologies through courses like "Data Scientist: Statistics for Data Science.</p></>,
                date: " mai 2024"
            },
            {
                uni: "Udemy",
                title: " The Git & GitHub Bootcamp",
                description: () => <><Check color="#6e06f2" className="lg:size-9 size-16" /><p className="lg:text-base text-xs">Udemy offers comprehensive training on various web development technologies through courses like "The Git & GitHub Bootcamp: The Complete-Practical Guide. <Link className="text-[#6e06f2] text-nowrap" href={"https://www.udemy.com/certificate/UC-30bf745d-1111-4eb5-9b49-b1e9ea4c7c5c/"}>GitHub, Git</Link> </p></>,
                date: "Avril 2024"
            },
            {
                uni: "Huawei",
                title: " Cloud Advanced: Architecture and Technologies",
                description: () => <><Check color="#6e06f2" className="lg:size-9 size-16" /><p className="lg:text-base text-xs">Huawei propose une formation complète sur les technologies cloud avancées à travers des cours comme 'Cloud Advanced: Architecture and Technologies. <Link className="text-[#6e06f2] text-nowrap" href={"https://e.huawei.com/en/talent/#/personal/mycert?tab=cert"}>Coud</Link> </p></>,
                date: "Septembre 2024"
            }
        ]

    const handleItemClick = (i: number) => {
        if (i === index) {
            setIsAnimated(false); // Reset animation if the same item is clicked
        } else {
            setIsAnimated(true); // Trigger animation for different items
        }
        setPreviousIndex(index); // Update the previous index
        setIndex(i); // Update the current index
    }
    certificates.some((cer, cerIndex) => cer.title === certificates[index].title && cerIndex !== index); useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isAnimated) {
            interval = setTimeout(() => setIsAnimated(false), 500);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isAnimated, setIsAnimated]);
    return (
        <div id="education" className="lg:space-y-32 space-y-16 my-10">
            <div className="lg:mx-20 lg:space-y-20 space-y-8">
                <Fade direction="left">
                    <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap mx-3'>Education<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
                </Fade>
                <Fade duration={1500}>
                    <div className="flex flex-col lg:justify-start justify-center lg:flex-row lg:gap-28 gap-10 items-center lg:mx-16 mx-3">
                        <h1 className="p-6 lg:p-10 cursor-pointer lg:border-l-4 lg:border-b-0 border-b-4 border-[#6e06f2] text-[#6e06f2] text-2xl font-Poppins font-semibold">{education.uni}</h1>
                        <div className="space-y-6">
                            <div>
                                <h1 className="lg:text-2xl text-xl font-Poppins font-bold capitalize">{education.title}</h1>
                                <small className="text-[#4E525A] capitalize font-semibold">{education.duration}</small>
                            </div>
                            <ul>
                                <li className="flex items-center gap-x-4 lg:font-medium font-semibold"><Check color="#6e06f2" className="lg:size-9 size-10" /><p className="lg:text-base text-xs">{education.description}</p></li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="lg:mx-20 lg:space-y-20 space-y-8">
                <Fade direction="left">
                    <h1 className='capitalize font-bold font-Poppins text-5xl lg:text-8xl flex items-center text-nowrap mx-3'>certificates<span className='lg:text-9xl text-6xl font-bold text-[#6e06f2]'>.</span></h1>
                </Fade>
                <Fade duration={1500}>
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-10 lg:space-x-28 items-center lg:mx-16 mx-3">
                        <div className="lg:text-2xl text-lg flex flex-row lg:flex-col font-Poppins font-semibold">
                            {certificates.map((cer, i) =>
                                <h1 key={i} className={cn("lg:p-10 p-6 lg:border-b-0 border-l-0 lg:border-r-0 cursor-pointer text-nowrap lg:border-l-4 border-b-4",
                                    i !== index ? "border-[#4E525A] text-[#4E525A]" : "border-[#6e06f2] text-[#6e06f2]")} onClick={() => handleItemClick(i)} >{cer.uni}</h1>
                            )}
                        </div>
                        <div className={cn("space-y-6",
                            isAnimated && "certif-animation")}>
                            <div>
                                <h1 className="lg:text-2xl text-xl font-Poppins font-bold capitalize">{certificates[index].title}</h1>
                                <small className="text-[#4E525A] capitalize font-semibold">{certificates[index].date}</small>
                            </div>
                            <ul className="duration-500 transition-opacity">
                                <li className="flex items-center gap-x-4 lg:font-medium font-semibold">
                                    {typeof certificates[index].description === 'function' ? certificates[index].description() : certificates[index].description}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Education