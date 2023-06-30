const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: json.stringify(data),
    });
    const responddata = await response.json();
    return responddata;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (url) => {
  try {
    const respond = await fetch(url);
    const data = await respond.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { postData, getData };
