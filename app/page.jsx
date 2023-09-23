export default function Homepage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <p>LONG ISLAND</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: "flex  max-width-96 justify-center	aligns-center",
  tabs: "text-white	",
  mainContainer: "w-screen h-screen flex bg-background",
};
