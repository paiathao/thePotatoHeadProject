
export default formData => {
  try {

    const {
      subscription,
      contactChecked,
      personalNote,
      streetAddress2,
      floorNumber,
      roomNumber,
      searchField,
      ...requiredProps
    } = formData;

    const requiredPropsArray = Object.keys(requiredProps);

    requiredPropsArray.every(key => {
      if (key === 'baby') {
        return requiredProps[key].every(baby => {
          return Object.values(baby).every(babyValue => {
            if (babyValue === '') {
              throw Error('Please fill out required fields');
            }
            return true;
          });
        });
      }
      if (requiredProps[key] === '') {
        throw Error(`${key} is required`);
      } else {
        return true;
      }


    })

  } catch (error) {

    throw new Error(error.message);

  }
}