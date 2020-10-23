import { Student } from '../../models/student';

export function DefaultStudent(): Student {
  return {
    id: null,
    firstName: null,
    lastName: null,
    middleName: null,
    birthDate: null,
    sex: null,
  };
}
