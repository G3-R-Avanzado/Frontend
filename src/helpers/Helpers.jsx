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