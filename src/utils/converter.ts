/**
 * Function to convert either kilojoules to calories or calories to kilojoules.
 *
 * @param {number} kilojoules - the amount of kilojoules to convert
 * @param {number} calories - the amount of calories to convert
 * @return {number} the converted value
 */
const converter = (kilojoules?: number, calories?: number): number => {
  return kilojoules
    ? convertToCalories(kilojoules)
    : convertToKilojoules(calories!);
};

const convertToCalories = (kilojoules: number): number => {
  return Math.round(kilojoules / 4.184);
};

const convertToKilojoules = (calories: number): number => {
  return Math.round(calories * 4.184);
};

export default converter;
