import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
const index = ({
  solution,
  toggleOpen,
  handleToggle
}: {
  solution: { id: number; title: string[]; list: string[]; note: string | null }
  toggleOpen: boolean
  handleToggle: () => void
}) => {
  const [isFull, setIsFull] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsFull(window.innerWidth >= 599)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <details open={isFull || toggleOpen} className={styles[`list--${solution.id}`]}>
      <summary onClick={handleToggle} className={styles.summary}>
        <span>
          {solution.title[0]}
          <br />
          <span className={styles["hidden-sp"]}>・</span>
          {solution.title[1]}
        </span>
      </summary>
      <div className={styles.content}>
        <div className={styles[`list--body`]}>
          <p>
            {solution.list.slice(0, 7).map((l, i) => (
              <React.Fragment key={i}>
                {l} <br />
              </React.Fragment>
            ))}
          </p>
          <p>
            {solution.list.slice(7, 14).map((l, i) => (
              <React.Fragment key={i}>
                {l} <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className={styles[`list--body2`]}>
          {solution.list.slice(14, 16).map((l, i) => (
            <React.Fragment key={i}>
              {l} <br />
            </React.Fragment>
          ))}
        </div>
        <p className={styles[`text-notes`]}>{solution.note}</p>
        <a href='#contact' className={styles[`details_link`]}>{`お見積りのご依頼はこちら>>`}</a>
      </div>
    </details>
  )
}

export default index
