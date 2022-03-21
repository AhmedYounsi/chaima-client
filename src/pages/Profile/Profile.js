/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
 
import "./Profile.scss";
 
function Profile() {
  const inputRef = useRef(null);

  
  const Mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

   

  return (
    <>
     
      <div className="Compte transition_opacity home">
        {
          <>
           
            <div className="content-row">
              <div className="content">
                <p className="username" style={{ fontSize: 25 }}>
                  Bonjour{" "}
                  <b style={{ fontSize: 30 }}>
                    {" "}
                    
                  </b>
                  
                </p>
                
                <hr />
             
                <h5>A propos</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur itaque culpa explicabo error provident, inventore
                  laboriosam incidunt natus, amet ipsam, dolor libero nobis.
                  Aspernatur fuga magnam voluptatibus perferendis vitae! Minus!
                </p>
                <hr />
               
              
                <div className="form-wraper">
                <h5 className="mb-4">Inforamtions du patient</h5>
                 
                  <div className="row_group">
                    <div className="form-group">
                      <input
                        
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                      />
                    </div>
                    <div className="form-group">
                      <input
                       
                        type="text"
                        className="form-control"
                        placeholder="Prénom"
                      />
                    </div>
                  </div>

                 

                  <div className="row_group">
                    <div className="form-group">
                      <label htmlFor="">Date de naissance</label>
                      <input
                       
                        type="date"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Groupe sanguin</label>
                      <select
                      
                        className="form-select"
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="">Je ne sais pas</option>
                      </select>
                    </div>
                  </div>
                  <div className="row_group">
                    <div className="form-group">
                      <label htmlFor="">Taille (cm)</label>
                      <input
                       
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Poids (kg)</label>
                      <input
                        
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                 
                </div>
             
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
}

export default Profile;
