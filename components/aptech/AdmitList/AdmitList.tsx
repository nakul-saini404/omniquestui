"use client";

import React from "react";
import styles from "./AdmitList.module.css";

const admits = [
    {
        id: 1,
        src: "/images/congratulations_rajan.jpg",
        alt: "Rajan – Rank 1, Data Analytics, London School of Economics",
        name: "Rajan",
    },
    {
        id: 2,
        src: "/images/congratulations_amrit.jpg",
        alt: "Amrit – Rank 2, Data Science & AI, University of Toronto",
        name: "Amrit",
    },
    {
        id: 3,
        src: "/images/congratulations_nandini.jpg",
        alt: "Nandini – Rank 3, Web Dev, University of Melbourne",
        name: "Nandini",
    },
];

export default function AdmitList() {
    const handleImageClick = () => {
        const capstoneSection = document.getElementById("capstone");
        if (capstoneSection) {
            capstoneSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={styles.section} id="admit-list">
            <div className={styles.headerWrapper}>
                <span className={styles.badge}>Our Students</span>
                <h2 className={styles.heading}>The Admit List</h2>
                <p className={styles.subheading}>
                    Click on any card to explore their Capstone Projects
                </p>
            </div>

            <div className={styles.grid}>
                {admits.map((admit) => (
                    <button
                        key={admit.id}
                        className={styles.imageWrapper}
                        onClick={handleImageClick}
                        aria-label={`View ${admit.name}'s Capstone Project`}
                        title={`Click to see ${admit.name}'s Capstone Projects`}
                    >
                        <img
                            src={admit.src}
                            alt={admit.alt}
                            className={styles.image}
                            draggable={false}
                        />
                        <div className={styles.overlay}>
                            <span className={styles.overlayText}>View Capstone ↓</span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}