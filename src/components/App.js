import styles from "./App.module.scss";

function Title({truc}) {
  const localStyles = {
    
    h1: {
      color: 'fuchsia',
      textAlign: truc ? 'center' : 'left',
    }
  }
  return (
    <div className="border-title App">
      {/** styles gérés via un objet js*/}
      <h1 style={localStyles.h1}>Kasa</h1>
      {/** styles gérés en module css - bien regarder le nom de classe généré dans le debugger !*/}
      <p className={styles.p}>test</p>
    </div>
  );
}

export default Title;
