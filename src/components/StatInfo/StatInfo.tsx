import styles from "./StatInfo.module.scss";

interface StatInfoProps {
  title: string;
  data: number;
}

export const StatInfo = ({ title, data }: StatInfoProps) => (
  <div className={styles.info}>
    <div className={styles.infoTitle}>{title}</div>
    <div className={styles.infoNumber}>{data}</div>
  </div>
);
