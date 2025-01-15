'use client'

import styles from "./page.module.scss";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { motion } from 'framer-motion';

import Image from 'next/image'



export default function Contato() {



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
                            Familias
                        </h1>

                        <p>
                            Essas são as minhas fotos de familias, sessões que fiz no templo e em outros lugares.
                        </p>
                    </motion.div>


                    <motion.div className={styles.headerdireita}
                        initial={{ opacity: 0, x: +100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: .9 }}
                    >

                        <Link href="/">
                            <p className={styles.headeremail}>Voltar para home</p>
                        </Link>
                    </motion.div>
                </section>

                <motion.section className={styles.album}
                    initial={{ opacity: 0, y: +100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >

                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias01.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias02.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias03.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias04.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias05.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias06.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias07.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias08.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias09.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias10.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias11.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias12.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />

                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias14.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias15.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias16.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />
                    <Image
                        alt="Logo Sujeito Pizza"

                        src={"/familias17.jpg"}
                        width={700}
                        height={420}
                        priority={true}
                        quality={100}
                    />






                </motion.section>
            </main >
        </div >
    );
}
