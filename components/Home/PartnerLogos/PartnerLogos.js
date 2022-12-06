import Image from 'next/future/image'
import styles from './partnerlogos.module.css'
import {disney_logo, sony_logo, universal_logo, paramount_logo, lionsgate_logo} from '../../../public/partner_logos/partner_logos'

export default function PartnerLogos() {
  return (
    <section className={styles.partnerLogoContainer}>
      <div className={styles.partnerLogoImages}>
        <Image className={styles.disneyLogo} src={disney_logo} alt="disney logo"></Image>
        <Image className={styles.lionsgateLogo} src={lionsgate_logo} alt="lionsgate logo"></Image>
        <Image className={styles.paramountLogo} src={paramount_logo} alt="paramount logo"></Image>
        <Image className={styles.sonyLogo} src={sony_logo} alt="sony logo"></Image>
        <Image className={styles.universalLogo} src={universal_logo} alt="universal logo"></Image>
      </div>
    </section>
  );
}