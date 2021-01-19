import PropTypes from 'prop-types'

import styles from './Post.module.css'

export function Post({ id, title, DeletePost }) {
  return (
    <div className={styles.Post}>
      <button className={styles.Post__Delete} onClick={() => DeletePost(id)}>
        X
      </button>
      <div className={styles.Post__title}>{title}</div>
      <img
        className={styles.Post__Image}
        src={`http://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  )
}

// Post.PropTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
// }
