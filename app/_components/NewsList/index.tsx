import Image from "next/image";

import styles from "./index.module.css";

type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt
}