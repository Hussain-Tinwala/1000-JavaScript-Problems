function snakeToCamel(snakeStr) {
    return snakeStr.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

console.log(snakeToCamel("this_is_a_test")); 
