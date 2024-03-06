import * as yup from "yup";

export const Attribut = yup.object().shape({
    Atributo: yup.string().required("Campo requerido"),
    Valor: yup.string().required("Campo requerido")
})

export const validationAltaProduct = yup.object().shape({
    Categoria: yup.string().required("Campo requerido"),
    Precio: yup.number().required('Campo requerido').min(100, 'precio minimo de 100 pesos'),
    Atributos: yup.array().of(Attribut).min(1, 'cargue un valor')
});

export const validationRegisterUser = yup.object().shape({
    name: yup.string().required("Campo requerido"),
    username: yup.string().required("Campo requerido"),
    email: yup.string().email("debe ingresar un email").required("Campo requerido"),
    password: yup.string().required("Campo requerido")
})

