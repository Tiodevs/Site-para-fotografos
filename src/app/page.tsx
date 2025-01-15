'use client'

import styles from "./page.module.scss";
import { Header } from "./components/header";
// import { Head } from "./components/head";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { useRouter } from 'next/navigation';
import { InstagramIcon, Linkedin } from "lucide-react";
import Link from 'next/link'
import { motion } from 'framer-motion';
// const { scrollYProgress } = useScroll()

import Image from 'next/image'

export default function Home() {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    // useEffect(() => {
    //     async function getUser() {
    //         try {
    //             const response = await api.get("/users");

    //             setUser(response.data[0]);
    //             console.log(response.data[0])
    //         } catch (error) {
    //             console.error("Erro ao carregar o usuário:", error);
    //         }
    //     }

    //     getUser();

    //     setLoading(true)
    // }, [])

    // const handleClick = (id: string) => {
    //     router.push(`/project/${id}`); // Redireciona para a rota dinâmica
    // };

    if (!loading) {
        return (
            <div className={styles.loaderContainer}>
                <div className={styles.loader}></div> {/* Loader giratório */}
            </div>
        );
    }

    return (
        <div>
            <main className={styles.main}>
                <section
                    className={styles.header} >
                    <motion.div className={styles.headeresquerda}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: .5 }}
                    >

                        <h1>
                            Bem-vindo ao meu <br />
                            portfólio de fotos
                        </h1>

                        <p>
                            Sou fotógrafo com 4 anos de experiência, tiro fotos de pré-wedding, casamentos, pré missão, familiares e eventos corpotativos.
                        </p>
                    </motion.div>

                    <motion.div className={styles.headermeio}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: .7 }}
                    >

                        <Link href="/missionarios">
                        <p>Missionários</p>
                        </Link>
                        <Link href="/familias">
                        <p>Famílias</p>
                        </Link>
                        <Link href="/eventos">
                        <p>Eventos</p>
                        </Link>
                        <Link href="/casais">
                        <p>Casais</p>
                        </Link>
                    </motion.div>


                    <motion.div className={styles.headerdireita}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: .9 }}
                    >

                        <p className={styles.headeremail}>(41) 98720-8843</p>
                        <p>entre em contato</p>
                    </motion.div>
                </section>
                <motion.section
                    className={styles.photo} >



                    <motion.div className={styles.headerdireita}
                        initial={{ opacity: 0, x: +100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: .9 }}
                    >

                        <Image
                            alt="Logo Sujeito Pizza"

                            src={"/minhafoto.jpg"}
                            width={700}
                            height={420}
                            priority={true}
                            quality={100}
                        />
                    </motion.div>
                </motion.section>




            </main >
        </div >
    );
}
