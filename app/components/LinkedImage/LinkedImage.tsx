import Image from "next/image";
import styles from "./LinkedImage.module.css";
export default function LinkedImage() {

  const selfieWidth = 200;
  return (
    <div className={styles.wrapper}>
        <Image
          alt="A cute picture of the developer"
          width={selfieWidth}
          height={(1900 / 1081) * selfieWidth}
          src="/pic1.webp"
        />
    </div>
  )

}
