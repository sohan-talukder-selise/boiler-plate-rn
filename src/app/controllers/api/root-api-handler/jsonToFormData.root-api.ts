interface props {
  [key: string]: any;
}

const jsonToFormData = (json: props) => {
  const formData = new FormData();
  (() => {
    for (let key in json) {
      if (Array.isArray(json[key])) {
        json[key].forEach((item: any) => formData.append(`${key}`, item));
      } else {
        formData.append(key, json[key]);
      }
    }
  })();
  console.log(JSON.stringify(formData));
  return formData;
};

export default jsonToFormData;
