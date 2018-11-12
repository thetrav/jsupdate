const array = /(\w+)\[(\d+)]/;

function jsu(obj, path, fn) {
  if(typeof path === 'string' || path instanceof String) {
    return jsu(obj, parse(path), fn);
  }
  
  if(path.length == 0) {
    return fn(obj);
  }
  
  const [head, ...tail] = path;
  const arrayParts = head.match(array);
  
  if(arrayParts) {
    const name = arrayParts[1];
    const index = parseInt(arrayParts[2]);

    const newArray = obj[name].map((v, i) => {
      return (i === index) ? jsu(v, tail, fn) : v;
    })

    return {...obj, [name]: newArray};
  } else {
    return {...obj, [head]: jsu(obj[head], tail, fn)};
  }
}

function parse(path) {
  return path.split(".")
}

export default jsu