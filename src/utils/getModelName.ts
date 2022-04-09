const getModelName = (name: string) => {
  const lengthName = name.length;
  const internalName = name.charAt(0).toLowerCase() + name.slice(1);

  // plural name
  if (name[lengthName - 1] === 's') {
    const singularName = internalName.substring(0, lengthName - 1);
    return {
      singularName:
        singularName.charAt(0).toUpperCase() + singularName.slice(1),
      pluralName: internalName,
    };
  }

  if (name[lengthName - 1] === 'y' || name[lengthName - 1] === 'x') {
    return {
      singularName:
        internalName.charAt(0).toUpperCase() + internalName.slice(1),
      pluralName: `${internalName.substring(0, lengthName - 1)}ies`,
    };
  }

  return {
    singularName: internalName.charAt(0).toUpperCase() + internalName.slice(1),
    pluralName: `${internalName}s`,
  };
};

export default getModelName;
