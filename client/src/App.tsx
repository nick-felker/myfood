import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextField } from '@material-ui/core'

function App() {

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>

    </>
  )

}

export default App;

