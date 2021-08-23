import { Avatar, Button, Chip as MuiChip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Chip = (props) => {
  const className = `${props.className} ${styles.chip}`
  return (
    <MuiChip {...props} className={className}></MuiChip>
  );
}

const tags = [
  {label: 'ReactJS', color: 'primary'},
  {label: 'Hooks', color: 'primary'},
  {label: 'Fácil', color: 'secondary', className: styles.green},
  {label: '30 minutos', color: 'secondary', className: styles.green},
];

export default function Challenge() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Reto con ReactJS y Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1 className={`${styles.title} __title`}>
              Gestión del estado de un componente ReactJS
            </h1>

            <div>
              {tags.map(tag => <Chip {...tag} key={tag.label}></Chip>)}
            </div>
          </div>
          <div className={styles.card}>
            <h3>Objetivo</h3>
            <p>El reto consiste en resolver un bug y refactorizar el código con el hook
              para gestionar el estado de un componente de react (useState).
            </p>
          </div>
          <div className={styles.card}>
            <h3>Contexto</h3>
            <p>El equipo de Frontend quiere añadir una nueva funcionalidad: XYZ
            La tech lead del equipo ha decidido que hará falta gestionar el estado en el componente Z, pero esta vez quiere probar con hooks de React, en concreto con useState.
            </p>
          </div>
          <div className={styles.card} style={{width: '100%'}}>
            <h3>Tareas</h3>
            <ul className={styles.tasks}>
              <li>
                <Avatar className={styles.avatar}>1</Avatar>
                <p>Corregir el bug</p>
              </li>
              <li>
                <Avatar className={styles.avatar}>2</Avatar>
                <p>Refactor: hook useState</p>
              </li>
            </ul>
            
          </div>
        </div>
      </main>

      <div className={styles.side}>
        <div className={styles.sideInfoBox}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowDialog(true)}
          >Empezar</Button>
        </div>
      </div>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <DialogTitle id="alert-dialog-title">{"Antes de empezar"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Este reto está formado por dos tareas. En la primera, deberás resolver un bug, mientras que en la segunda te proponemos que refactorizes el código.
          </DialogContentText>
          <DialogContentText>
            Puedes descargar el código desde el menú lateral. Cuando hayas modificado el código, solo tienes que clicar en "Subir mi solución" y seguir los pasos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Link href="challenge/task1">
              <Button>¡Ok!</Button>
            </Link>
        </DialogActions>
      </Dialog>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
