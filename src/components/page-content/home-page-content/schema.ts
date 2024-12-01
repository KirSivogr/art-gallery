import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
   searchQuery: Yup.string().required().min(3),
});