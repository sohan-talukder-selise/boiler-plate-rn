const removeCodeFromText = (text: string): string => {
  const regex = /\(#\d+\) (.+)/;
  const match = text.match(regex);

  if (match) {
    return match[1];
  } else {
    return '';
  }
};

export {removeCodeFromText};
