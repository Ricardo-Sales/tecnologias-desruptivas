import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
  const [login, setLogin] = useState('');
  const [usuario, setUsuario] = useState('');
  return(
    <Grid item xs={12}>
      <FormControl fullWidth>
        <Input id="login nome" aria-describedby="login_nome_helper_text" value={login} 
          onChange={e => { setLogin(e.target.value) }} />
        <FormHelperText id="login_helper_text">Login.</FormHelperText>
        <Input id="tarefa_titulo" aria-describedby="user_helper_text" value={usuario} 
          onChange={e => { setUsuario(e.target.value) }} />
        <FormHelperText id="usuario_helper_text">Usuario: </FormHelperText>
      </FormControl>
    </Grid>
  ) ;
}

export default Login;