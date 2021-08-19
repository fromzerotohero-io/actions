import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function Task() {
  const [showDialog, setShowDialog] = useState(false);
  const [solutionFile, setSolutionFile] = useState(null);

  const sendSolution = () => {
    const formData = new FormData(); 
    // Update the formData object 
    formData.append( 
      "solution",
      solutionFile
    ); 
    
    // Details of the uploaded file 
    console.log(solutionFile); 
    
    // Request made to the backend api 
    // Send formData object 
    fetch("/api/solution", {
      method: 'POST',
      body: formData
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tarea 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h3 style={{textAlign: 'left', flex: '1 100%'}}>Gestión del estado de un componente ReactJS</h3>
          <h1 style={{textAlign: 'left', flex: 1, marginBottom: '3rem'}} className={styles.title}>
          Tarea: corregir el bug
          </h1>

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
        </div>
      </main>

      <div className={styles.side}>
        <div className={styles.sideInfoBox}>
          <Button
            variant="outlined"
            color="default"
            style={{marginRight: '1rem'}}
            onClick={() => alert('descargar')}
          >Descargar código</Button>
          <Button
            variant="contained"
            color="default"
            onClick={() => setShowDialog(true)}
          >Subir solución</Button>
        </div>
      </div>

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <DialogTitle id="alert-dialog-title">{"Subir solución"}</DialogTitle>
        <DialogContent>
          <ol>
            <li>
              <DialogContentText id="alert-dialog-description">
                Comprime la carpeta con tu solución (no añadas la carpeta `node_modules`).
                <br></br>
                Puedes ejecutar este comando en entorno Unix para obtener el zip:
                <br></br>
                <br></br>
                <span className={styles.code}>
                  zip -r solution.zip pages package*
                </span>
              </DialogContentText>
            </li>
            <li style={{marginTop: '1rem'}}>
              <div>Sube tu fichero zip</div>
              <div>
                <input
                  type="file"
                  accept=".zip"
                  onChange={(event) => setSolutionFile(event.target.files[0])}
                ></input>
              </div>
            </li>
          </ol>
          <DialogActions>
            <Button variant="outlined" onClick={() => setShowDialog(false)}>
              Cancelar
            </Button>
            <Button
              disabled={solutionFile === null} variant="contained" color="primary"
              onClick={sendSolution}>
              Enviar solución
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
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
