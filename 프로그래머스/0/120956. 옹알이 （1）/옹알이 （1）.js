function solution(babbling) {
    const says = ["aya", "ye", "woo", "ma"]
    const perm = permutations(says)
    
    return babbling.reduce((a, c) => perm.includes(c) ? a+1 : a, 0)
}

function permutations(arr) {
    const result = [];

  function dfs(path, used) {
    if (path.length > 0) {
      result.push(path.join(""));
    }
    if (path.length === arr.length) return;

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(arr[i]);
      dfs(path, used);
      path.pop();
      used[i] = false;
    }
  }

  dfs([], Array(arr.length).fill(false));
  return result;
}