function solution(ingredient) {
  const recipe = [1, 2, 3, 1];
  const stack = [];
  let hamburgerCount = 0;

  for (const ingredientNumber of ingredient) {
    stack.push(ingredientNumber);

    if (stack.length >= 4) {
      const lastIndex = stack.length - 1;

      const isHamburger =
        stack[lastIndex - 3] === recipe[0] &&
        stack[lastIndex - 2] === recipe[1] &&
        stack[lastIndex - 1] === recipe[2] &&
        stack[lastIndex] === recipe[3];

      if (isHamburger) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        hamburgerCount += 1;
      }
    }
  }

  return hamburgerCount;
}