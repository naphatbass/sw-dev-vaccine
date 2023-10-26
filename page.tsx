import styles from './page.module.css'
import Banner  from '@/component/banner'
import Infocard from '@/component/infocard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.cardbox}>
        <Infocard/>
        <Infocard/>
        <Infocard/>
        <Infocard/>
      </div>
    </main>
  )
}
