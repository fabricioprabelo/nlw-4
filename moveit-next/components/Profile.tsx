import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/fabriciorabelo.png" alt="Fabricio Pereira Rabelo" />
      <div>
        <strong>Fabricio Pereira Rabelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
