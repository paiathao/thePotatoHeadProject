
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
      if (requiredProps[key] === '') {
        throw Error('Please fill out all required fields');
      } else if (key === 'baby') {
        return requiredProps[key].every(baby => {
          return Object.values(baby).every(babyValue => {
            if (babyValue === '') {
              throw Error('Please fill out all required fields');
            }
            return true;
          });
        });
      } else {
        return true;
      }
    })

  } catch (error) {

    throw new Error(error.message);

  }
}