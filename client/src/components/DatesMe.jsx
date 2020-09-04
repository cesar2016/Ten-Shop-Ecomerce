import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { loginUserCookie } from "../actions/index.js"
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { updateOnlineUser } from "../actions/index"

const estilos = {
    labelFontSize: {
      fontSize: "20px"
    },
    input: {
      height: "40px",
      borderRadius: "10px",
      fontSize: "20px"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "spaceBetween",
      alignContent: "spaceBetween"
    },
    botones: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    emailUsername: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }
  }


const DatesMe = ({ user, loginUserCookie, updateOnlineUser }) => {

  const [input, setInput] = useState({});
  const [boton, setBoton] = useState(false)

  if (boton) {
    document.getElementById("firstname").disabled = false;
    document.getElementById("surname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("username").disabled = false;
  } else if (document.getElementById("firstname")) {
    document.getElementById("firstname").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("username").disabled = true;
    document.getElementById("firstname").value = user.firstname;
    document.getElementById("surname").value = user.surname;
    document.getElementById("address").value = user.address;
    document.getElementById("email").value = user.email;
    document.getElementById("username").value = user.username;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    updateOnlineUser(user.id, input);
    document.getElementById("firstname").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("username").disabled = true;
    setBoton(false)
  };

  return (

      <div>
        <form>

          <div style={estilos.container}>
            <div class="form-group">
              <label
                for="Pepe"
                style={estilos.labelFontSize}
                className="font-weight-light"
                  >Firstname
              </label>
              <input type="text"
                className="form-control save"
                id="firstname"
                style={estilos.input}
                onChange={handleChange}
                name="firstname"
              />
            </div>
            &nbsp;
            &nbsp;
            <div class="form-group">
              <label
                for="cesarsanchez"
                style={estilos.labelFontSize}
                className="font-weight-light"
                  >Surname
              </label>
              <input type="text"
                className="form-control save"
                id="surname"
                style={estilos.input}
                onChange={handleChange}
                name="surname"
              />
            </div>

          </div>

          <div style={estilos.emailUsername}>
            <div class="form-group">
              <label
                for="cesarsanchez@gmail.com"
                style={estilos.labelFontSize}
                className="font-weight-light"
                  >Email
              </label>
              <input type="email"
                className="form-control save"
                id="email"
                aria-describedby="emailHelp"
                style={estilos.input}
                onChange={handleChange}
                name="email"
              />
            </div>
            &nbsp;
            &nbsp;
            <div class="form-group">
              <label
                for="cesarsanchez@gmail.com"
                style={estilos.labelFontSize}
                className="font-weight-light"
                  >Username
              </label>
              <input type="username"
                className="form-control save"
                id="username"
                style={estilos.input}
                onChange={handleChange}
                name="username"
              />
            </div>
          </div>

          <div class="form-group">
            <label
              for="Santa Julia 231 B° Colón"
              style={estilos.labelFontSize}
              className="font-weight-light"
                >Address
            </label>
            <input type="text"
              className="form-control save"
              id="address"
              style={estilos.input}
              onChange={handleChange}
              name="address"
            />
          </div>

          <div style={estilos.botones}>
            {boton   ?
            (<div id="botonSave">
            <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={(e) => handleSave(e)}
            >
              Save
            </Button>
          </div>) :

            (<div id="botonUpload">
            <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            onClick={() => setBoton(true)}
            >
              Edit
            </Button>
          </div>
            )}
          </div>

        </form>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.onlineUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loginUserCookie: () => dispatch(loginUserCookie()),
    updateOnlineUser: (id, body) => dispatch(updateOnlineUser(id, body))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(DatesMe)
