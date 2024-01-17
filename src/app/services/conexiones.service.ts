import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
/*import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app'*/



@Injectable({
  providedIn: 'root'
})
export class ConexionesService {
 // dbCollection:AngularFirestoreCollection<any>;
  arreglo:any;

 
  constructor(//private db:AngularFirestore,
              //public afAuth: AngularFireAuth
              private http:HttpClient
              ) {}

            
       
              getHospedaje(){
  
                var promise = new Promise((resolve, reject) => {
                    this.http.get('https://turismo.nld.gob.mx/assets/php/getHospedaje.php').subscribe((data)=>{
                        if(data){
                          resolve(data)
                        }else{
                          resolve(false)
                        }
                        
                    })
                })    
                return promise;
              
              }
              getHospedajeId(id) {

                var promise = new Promise((resolve, reject) => {
                  this.http.get('https://turismo.nld.gob.mx/assets/php/getHospedajeId.php?id='+id).subscribe((data) => {
                    if (data) {
                      resolve(data)
                    } else {
                      resolve(false)
                    }

                  })
                })
                return promise;

              }
              getEspacioId(id) {

                var promise = new Promise((resolve, reject) => {
                  this.http.get('https://turismo.nld.gob.mx/assets/php/getEspacioId.php?id='+id).subscribe((data) => {
                    if (data) {
                      resolve(data)
                    } else {
                      resolve(false)
                    }

                  })
                })
                return promise;

              }
              getTurismoReligiosoId(id) {

                var promise = new Promise((resolve, reject) => {
                  this.http.get('https://turismo.nld.gob.mx/assets/php/getTurismoReligiosoId.php?id=' + id).subscribe((data) => {
                    if (data) {
                      resolve(data)
                    } else {
                      resolve(false)
                    }

                  })
                })
                return promise;

              }

            getEventos() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getEventos.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
             getEspaciocultural() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getEspacios.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
            getEspaciosdeportivos() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getEspaciosdeportivos.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
            getMonumentos() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getMonumentos.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
            getClubsocial() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getClubsocial.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
          getParquesyplazas() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://turismo.nld.gob.mx/assets/php/getParquesyplazas.php').subscribe((data) => {
                if (data) {
                  resolve(data)
                } else {
                  resolve(false)
                }

              })
            })
            return promise;

          }
            getTurismoReligioso() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getTurismoReligioso.php').subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }

            getServiciosH(id) {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://turismo.nld.gob.mx/assets/php/getServiciosH.php?id='+id).subscribe((data) => {
                  if (data) {
                    resolve(data)
                  } else {
                    resolve(false)
                  }

                })
              })
              return promise;

            }
          getCompras() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://turismo.nld.gob.mx/assets/php/getCompras.php').subscribe((data) => {
                if (data) {
                  resolve(data)
                } else {
                  resolve(false)
                }

              })
            })
            return promise;

          }
        getNegocios(id) {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getNegocios.php?id=' + id).subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
        getRestaurantes() {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getRestaurantes.php').subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
        getDoctores() {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getDoctores.php').subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
      getAereopuerto() {

        var promise = new Promise((resolve, reject) => {
          this.http.get('https://turismo.nld.gob.mx/assets/php/getAereopuerto.php').subscribe((data) => {
            if (data) {
              resolve(data)
            } else {
              resolve(false)
            }

          })
        })
        return promise;

      }
      getAerepuertoId(id) {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getAerepuertoId.php?id=' + id).subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
  getEventoId(id) {

    var promise = new Promise((resolve, reject) => {
      this.http.get('https://turismo.nld.gob.mx/assets/php/getEventoId.php?id=' + id).subscribe((data) => {
        if (data) {
          resolve(data)
        } else {
          resolve(false)
        }

      })
    })
    return promise;

  }
        getLineaAu() {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getLineaAu.php').subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
        getLineaId(id) {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://turismo.nld.gob.mx/assets/php/getLineaId.php?id=' + id).subscribe((data) => {
              if (data) {
                resolve(data)
              } else {
                resolve(false)
              }

            })
          })
          return promise;

        }
      
}
