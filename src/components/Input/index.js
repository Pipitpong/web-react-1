import styles from './Input.module.css'

export function Input({ onEnter, input, setInput }) {
  function onChange(event) {
    setInput(event.target.value)
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      onEnter()
    }
  }

  return (
    <div className={styles.Input}>
      <div className={styles.Input__header}>Create Post</div>
      <input
        className={styles.Input__field}
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
