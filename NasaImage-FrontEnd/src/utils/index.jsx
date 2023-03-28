export const  classNames=(...classes)=> {
  return classes.filter(Boolean).join(' ');
}

export    const getKey = (text) => {
  let key = text;
  key = key.replace(/ /g, '_');
  key = key.replace('/', '_');
  return key.toLowerCase();
};